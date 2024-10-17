<template>
  <header
    :class="canCollapse ? '' : 'bg-white'"
    class="md:h-16 w-full md:z-30 flex flex-col md:flex-row"
  >
    <div
      :class="[
        expanded || !canCollapse ? 'md:w-60' : 'md:w-14',
        canCollapse ? ' border-b border-gray-1300' : '',
        'flex justify-between px-4 py-2 md:py-0 items-center bg-white',
      ]"
    >
      <div class="flex">
        <WIconsBase
          v-show="canCollapse"
          icon="hamburger"
          class="cursor-pointer text-tertiary-1100"
          @click.native="toggleExpand"
        />
        <img
          :class="[
            expanded || !canCollapse ? 'block' : 'block md:hidden',
            'w-20 md:ml-2.5 lg:ml-2.5 ml-0.5',
          ]"
          src="/logo/well.png"
          alt="Workflow"
          class="cursor-pointer"
          tabindex="0"
          @click="$router.push(`/${$i18n.locale}`)"
        />
      </div>
      <!-- lang toggle -->
      <div class="items-center space-x-4 md:hidden flex">
        <span class="text-gray-50 flex items-center">
          <WIconsBase icon="globe" />
          <ClientOnly>
            <WLangSwitcher />
          </ClientOnly>
        </span>

        <div v-if="currentUser" class="ml-auto my-auto relative mr-2">
          <FeedPopover :animated="true">
            <button
              id="user-menu"
              class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <div class="">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="currentUser.profile_pic"
                  alt=""
                />
              </div>
            </button>
            <template #content>
              <NavProfileDropDown />
            </template>
          </FeedPopover>
        </div>

        <WButtonsBase v-else type="secondary" @click.native="getURL()">{{
          $t('signin')
        }}</WButtonsBase>
      </div>
    </div>
    <NavFilterBar v-if="canCollapse" ref="filterBar" class="md:hidden" />
    <div
      class="flex flex-wrap flex-1 hidden md:inline-flex"
      :class="canCollapse ? '' : 'bg-white'"
    >
      <div v-if="canCollapse" class="w-3/12 flex items-center pl-4">
        <NavFilterBar ref="filterBar" />
      </div>
      <div
        :class="[
          expanded && canCollapse ? 'hidden sm:flex' : 'flex',
          'items-center ml-auto mr-4 space-x-4',
        ]"
      >
        <ButtonsToggle
          v-if="
            canCollapse &&
            versions &&
            versions.type !== 'v2-pilot' &&
            versions.type !== 'community'
          "
          v-model="unit"
        >
          <template #label>
            <span class="text-primary-600 font-medium">Imperial</span>
          </template>
        </ButtonsToggle>
        <span class="text-gray-50 flex items-center">
          <WLangSwitcher />
        </span>

        <div v-if="currentUser" class="ml-auto my-auto relative mr-2">
          <FeedPopover :animated="true">
            <button
              id="user-menu"
              class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                class="h-10 w-10 rounded-full"
                :src="currentUser.profile_pic"
                alt=""
              />
            </button>
            <template #content>
              <NavProfileDropDown />
            </template>
          </FeedPopover>
        </div>

        <WButtonsBase v-else type="secondary" @click.native="getURL()">{{
          $t('signin')
        }}</WButtonsBase>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    canCollapse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      unit: true,
    }
  },

  computed: {
    ...mapState({
      currentUser: (state) => state.authentication.currentUser,
      versions: (state) => state.standard.versions,
    }),
    expanded() {
      // if (this.$store.state.settings.navExpanded == null) {
      //   return false
      // }

      // if (this.$store.state.settings.navExpanded === 'false') {
      //   return false
      // }

      // if (this.$store.state.settings.navExpanded === 'true') {
      //   return false
      // }
      return this.$store.state.settings.navExpanded
    },
  },
  watch: {
    unit() {
      this.$store.commit('setUnit', this.unit)
    },
  },

  mounted() {
    this.loginUser(this.$cookies.get(this.$config.cbaPrefix + '.cba.token'))
  },

  methods: {
    getURL() {
      if (process.client) {
        const query = process.env.appUrl
        window.location.href = `${this.$config.loginUrl}?redirect_to=${query}`
      }
    },
    toggleExpand() {
      let currentState = this.$store.state.settings.navExpanded
      if (currentState === 'false' || currentState === null) {
        currentState = false
      }
      if (currentState === 'true') {
        currentState = true
      }
      this.$store.commit('settings/setNavState', !currentState)
    },
    loginUser(data) {
      this.$store.dispatch('authentication/login', { token: data })
    },
    async logOut() {
      await this.$router.push('/logout')
    },
  },
}
</script>
