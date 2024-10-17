<template>
  <div
    class="flex justify-center px-6 pt-3 md:pt-5 pb-0 md:pb-6 border-2 border-gray-300 border-dashed rounded-md"
    :data-type="context.type"
  >
    <div class="text-center w-full">
      <div class="mt-1 text-sm text-gray-600">
        <ul>
          <li
            v-for="(item, index) in files"
            :key="index"
            class="max-w-md mx-auto px-4 py-3 rounded-md shadow-md my-4 flex"
          >
            <div
              v-if="
                item.url &&
                item.url.length > 41 &&
                !context.attributes['is-zendesk-upload']
              "
              class="overflow-hidden mr-2"
            >
              <a
                :href="openDocument(item.url)"
                target="_blank"
                class="truncate text-primary-700 cursor-pointer"
              >
                <span v-if="item.url.includes('-_~_-')">
                  <span v-if="item.name">{{ item.name }}</span>
                  <span v-else>
                    {{
                      item.url.split('-_~_-')[0].split('/')[
                        item.url.split('-_~_-')[0].split('/').length - 1
                      ]
                    }}
                  </span>
                </span>
                <span v-else>{{ item.url }}</span>
              </a>
            </div>
            <div v-else class="truncate">{{ item.name }}</div>
            <button
              class="ml-auto text-danger-500"
              type="button"
              @click.stop="onDelete(item)"
            >
              remove
            </button>
          </li>
        </ul>
        <div class="overflow-hidden relative w-full mt-4 mb-4">
          <div
            v-if="files.length === 0 || files.null"
            class="text-center w-full"
          >
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div class="mt-1 text-sm text-gray-600">
              <div
                class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
              >
                Upload a file
              </div>
              or drag and drop
            </div>
            <p class="mt-1 text-xs text-gray-500">
              {{ context.attributes['mime-types'] }}
            </p>
          </div>
          <div v-else>
            <div
              v-if="
                context.attributes.multiple === undefined ||
                context.attributes.multiple ||
                context.attributes.multiple === 'true'
              "
              class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Add another file
            </div>
          </div>
          <input
            v-if="
              context.attributes.multiple === '' ||
              context.attributes.multiple === 'true'
            "
            :key="forceReRender"
            class="cursor-pointer absolute block py-2 px-4 w-full h-full opacity-0 top-0"
            multiple
            type="file"
            :disabled="uploading"
            :accept="context.attributes['mime-types']"
            @change="
              handleFileUpload({
                event: $event,
                model: 'file',
              })
            "
          />
          <input
            v-else
            :key="forceReRender"
            class="cursor-pointer absolute block py-2 px-4 w-full h-full opacity-0 top-0"
            type="file"
            :disabled="uploading"
            :accept="context.attributes['mime-types']"
            @change="
              handleFileUpload({
                event: $event,
                model: 'file',
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
    uploadType: {
      type: String,
      required: false,
      default: 'file',
    },
    uploadPath: {
      type: String,
      required: false,
      default: '/api/upload/file',
    },
    multiple: {
      type: Boolean,
      required: false,
      default: true,
    },
    isZendeskUpload: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    uploading: false,
    forceReRender: 0,
    files: [],
    allowedFileExtensions: null,
  }),
  computed: {
    ...mapState({
      user: (state) => state.user.currentUser,
    }),
    model() {
      return this.context.model
    },
  },
  watch: {
    files() {
      // eslint-disable-next-line vue/no-mutating-props
      this.context.model = this.files
    },
  },
  mounted() {
    if (this.context.attributes['mime-types']) {
      this.allowedFileExtensions =
        this.context.attributes['mime-types'].split(',')
      this.allowedFileExtensions = this.allowedFileExtensions.map(
        (fileExt) => fileExt.split('/')[1]
      )
    }
    if (this.context.value) {
      this.files = [...this.context.value]
    }
    const documents = []
    for (let i = 0; i < this.files.length; i++) {
      let file = {}
      if (this.files[i].url) {
        file = {
          url: this.files[i].url,
        }
      }
      if (this.files[i].link_s3) {
        file = {
          url: this.files[i].link_s3,
        }
      }
      documents.push(file)
    }
    this.files = documents
  },
  methods: {
    openDocument(url) {
      const baseUrl = window.location.origin
      return `${baseUrl}/validate/private-document?url=${url}`
    },
    onDelete(upload) {
      this.files = this.files.filter((obj) => obj.url !== upload.url)
      // this.context.model = this.files
      if (this.context.attributes['is-zendesk-upload']) {
        this.$axios.delete(
          process.env.supportApi + '/support/deleteUpload/' + upload.token,
          {
            Authorization: this.$store.state.support.supportToken,
          }
        )
      } else {
        this.$axios.post('/api/upload/remove', { file: upload.url })
      }
      this.forceReRender++
    },
    async handleFileUpload({ event }) {
      const fileExtension = event.target.files[0].name.split('.').pop()
      if (
        fileExtension === 'zip' ||
        fileExtension === 'exe' ||
        (this.context.attributes['mime-types'] &&
          this.context.attributes['mime-types'] !== '' &&
          !this.allowedFileExtensions.includes(fileExtension))
      ) {
        alert('This file type is not allowed.')
      } else {
        this.uploading = true
        const file =
          event &&
          event.target &&
          event.target.files &&
          event.target.files.length
            ? event.target.files[0]
            : false
        if (!file) {
          alert('file is missing')
        } else {
          const formData = new FormData()
          let url = '/api/upload/file'
          let headers = {}
          if (this.context.attributes['is-zendesk-upload']) {
            url = process.env.supportApi + '/support/fileUpload'
            formData.append('user_email', this.user.email)
            formData.append('file', file)
            headers = {
              'Content-Type': 'multipart/form-data',
              Authorization: this.$store.state.support.supportToken,
            }
          } else {
            headers = {
              'Content-Type': 'multipart/form-data',
            }
            if (this.context.attributes['upload-type']) {
              url = '/api/upload/' + this.context.attributes['upload-type']
            }
            if (this.context.uploadUrl) {
              url = this.context.uploadUrl
            }
            formData.append('file', file)
            formData.append('path', this.context.attributes['upload-path'])
          }
          try {
            const response = (
              await this.$axios.post(url, formData, {
                headers,
              })
            ).data
            if (response) {
              let uploaded = null
              if (this.context.attributes['is-zendesk-upload']) {
                uploaded = {
                  url: response.attachment.file_name,
                  name: response.attachment.file_name,
                  token: response.token,
                }
              } else {
                uploaded = {
                  url: response,
                  name:
                    file.webkitRelativePath || file.relativePath || file.name,
                }
              }
              this.files.push(uploaded)
              // this.context.model = this.files
            }
          } catch (e) {}
        }
        this.uploading = false
      }
    },
  },
}
</script>
