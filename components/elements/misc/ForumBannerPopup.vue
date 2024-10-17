<template>
  <transition name="popup">
    <div v-if="showBanner && !popupDismissed" class="forum-banner-popup">
      <div class="relative">
        <button
          class="absolute banner-dismiss p-1"
          @click="
            showBanner = false
            dismissPopup()
          "
        >
          <WIconsBase icon="x" class="text-white" />
        </button>
        <ForumBanner />
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      showBanner: false,
    }
  },
  computed: {
    ...mapState('authentication', ['popupDismissed']),
  },
  methods: {
    ...mapMutations('authentication', ['dismissPopup']),
  },
}
</script>

<style lang="scss">
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.55s ease-in-out;
}
.popup-enter,
.popup-leave-active {
  opacity: 0;
}

.forum-banner-popup {
  z-index: 100;
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  .banner-dismiss {
    top: 20px;
    right: 20px;
  }
}
</style>
