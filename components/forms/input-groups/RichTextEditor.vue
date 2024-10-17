<template>
  <div class="border border-primary-200 rounded">
    <editor-menu-bar
      v-slot="{ commands, isActive }"
      :editor="editor"
      class="border-b border-primary-200"
    >
      <div class="px-3 py-1 flex space-x-2">
        <div
          class="cursor-pointer my-auto"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bold"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="w-3 text-primary-700"
            style="fill: currentcolor"
          >
            <path
              fill="currentColor"
              d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"
              class=""
            ></path>
          </svg>
        </div>

        <div
          class="cursor-pointer menubar__button my-auto"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-icon="italic"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="w-2.5 text-primary-700"
            style="fill: currentcolor"
          >
            <path
              fill="currentColor"
              d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"
              class=""
            ></path>
          </svg>
        </div>

        <div
          class="cursor-pointer menubar__button my-auto"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <div class="flex h-7">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="underline"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="my-auto w-3.5 pt-0.5 text-primary-700"
              style="fill: currentcolor"
            >
              <path
                fill="currentColor"
                d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                class=""
              ></path>
            </svg>
          </div>
        </div>
        <!-- <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strike" />
        </button>


        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <icon name="hr" />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <icon name="undo" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <icon name="redo" />
        </button> -->
      </div>
    </editor-menu-bar>

    <editor-content
      class="h-44 overflow-auto px-3 py-1 editor"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    // Icon,
  },
  props: {
    context: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      cursorIndex: 0,
    }
  },
  computed: {
    model() {
      return this.context.model
    },
  },
  watch: {
    cursorIndex(value) {
      this.context.attributes['cursor-index'] = value
    },
    value(val) {
      if (this.emitAfterOnUpdate) {
        this.emitAfterOnUpdate = false
        return
      }
      if (this.editor) {
        this.context.model = val
        this.editor.setContent(val)
      }
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
      ],
      onTransaction: ({ state }) => {
        this.cursorIndex = state.selection.anchor
      },
      onUpdate: ({ getHTML }) => {
        this.emitAfterOnUpdate = true
        this.$emit('input', getHTML())
        this.context.model = getHTML()
      },
    })
    this.editor.setContent(this.context.model)
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
}
</script>
<style>
.ProseMirror:focus {
  outline: none;
}
.ProseMirror {
  height: 100%;
}
.ProseMirror a {
  color: #4094b0;
}
</style>
