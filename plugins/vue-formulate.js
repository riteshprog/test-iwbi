import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import FileUpload from '~/components/forms/input-groups/FileUpload'
import RichTextEditor from '~/components/forms/input-groups/RichTextEditor'

// register your component with Vue
Vue.component('FileUpload', FileUpload)
Vue.component('RichTextEditor', RichTextEditor)

export default function ({ $axios }) {
  Vue.use(VueFormulate, {
    uploader: $axios,
    uploadUrl: '/api/upload/file',
    library: {
      fileupload: {
        classification: 'uploader',
        component: 'FileUpload',
      },
      richtext: {
        classification: 'richtext',
        component: 'RichTextEditor',
      },
    },
    classes: {
      help(context) {
        switch (context.classification) {
          default:
            return 'text-danger-500 text-sm mt-1'
        }
      },
      outer(context) {
        switch (context.classification) {
          case 'box':
            return ''
          default:
            return ''
        }
      },
      element(context) {
        switch (context.classification) {
          case 'box':
            return 'inline'
          default:
            return ''
        }
      },
      wrapper(context) {
        switch (context.classification) {
          case 'box':
            return 'flex'
          default:
            return ''
        }
      },
      label(context) {
        switch (context.classification) {
          case 'box':
            return 'ml-4 font-medium text-primary-700'
          default:
            return 'text-sm font-bold leading-5 text-gray-700 sm:mt-px sm:pt-2'
        }
      },
      input(context) {
        switch (context.classification) {
          case 'select':
            return 'text-blue-1500 font-light leading-5 form-select relative block w-full rounded-none bg-white focus:z-10 transition ease-in-out duration-150 text-sm py-2 pl-2 pr-6 outline-none'

          case 'button':
            return 'focus:outline-none border-transparent bg-primary-600 primary-btn hover:bg-primary-500 hover:border-primary-700 active:bg-primary-700 text-white shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out'
          case 'textarea':
            return 'border-primary-300 px-3 py-2  rounded-lg text-primary-700 block w-full mb-4 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-y border'
          case 'box':
            return 'focus:ring-primary-500 h-4 w-4 text-primary-600 border-primary-300'
          case 'text':
            return 'h-10 appearance-none w-full px-3 py-2 mb-4 border border-gray-900 text-gray-1600 placeholder-text-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-gray-900 transition duration-150 ease-in-out sm:text-sm sm:leading-5 font-light'
          case 'multiselect':
            return 'h-10 text-primary-700 appearance-none w-full px-3 py-2 border border-primary-300 rounded-md placeholder-primary-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          default:
            return ''
        }
      },
      button: 'bg-red-500',
      errors: '',
      error: 'mt-2 text-sm text-red-600',
      grouping: 'mb-2',
      groupRepeatable: 'relative',
      groupRepeatableRemove:
        'absolute border-danger-500 duration-150 ease-in-out flex font-black font-medium justify-center mr-1 mt-7 my-auto px-3 py-0.5 right-0 rounded-full text-danger-500 text-sm text-white top-0 transition',
    },
  })
}
