<template>
  <aside
    :class="[
      expanded ? 'w-full md:w-60 px-4 font-museo-slab' : 'md:-ml-0 w-0 md:w-14',
      'z-10 h-full  flex duration-1000 ease-in-out transition overflow-y-scroll bg-white flex-col md:flex-shrink-0',
    ]"
  >
    <client-only>
      <WButtonsBase
        type="subNav2"
        :class="[
          currentTab === 'back_to_website'
            ? 'bg-blue-1500 text-white '
            : 'text-tertiary-1200 hover:bg-primary-1300',
          ' leading-6  text-white focus:bg-blue-1500 focus:text-white mt-2 ',
        ]"
        @click.native="$router.push(`/${$i18n.locale}`)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span v-if="expanded" class="ml-2">{{ $t('back_to_website') }}</span>
      </WButtonsBase>

      <WButtonsBase
        type="subNav2"
        :class="[
          currentTab === 'overview'
            ? 'bg-blue-1500 text-white'
            : 'text-tertiary-1200 hover:bg-primary-1300',
          ' leading-6  text-white focus:bg-blue-1500 focus:text-white image',
        ]"
        @click.native="
          $router.push(`/${$i18n.locale}/${$route.params.version}/overview`),
            toggleExpand()
        "
      >
        <img
          src="/images/grid.png"
          alt="Overview"
          :class="[
            currentTab === 'overview' ? 'filter brightness-0 invert' : null,
            'w-5 mx-2',
          ]"
        />
        <span v-if="expanded" class="ml-2 capitalize">{{
          $t('overview')
        }}</span>
      </WButtonsBase>
      <div v-if="versions" class="image">
        <WButtonsBase
          type="subNav2"
          :class="[
            currentTab === 'concepts'
              ? 'bg-blue-1500 text-white'
              : 'text-tertiary-1200 hover:bg-primary-1300',
            'image  leading-6  text-white focus:bg-blue-1500 focus:text-white ',
          ]"
          @click.native="
            $router.push(`/${$i18n.locale}/${$route.params.version}/concepts`),
              toggleExpand()
          "
        >
          <img
            src="/images/v2-icon.png"
            alt="Concepts"
            :class="[
              currentTab === 'concepts' ? 'filter brightness-0 invert' : null,
              'w-5 mx-2',
            ]"
          />
          <span v-if="expanded" class="ml-2 capitalize">
            {{
              versions.type !== 'v2-hsr' &&
              versions.type !== 'wpr' &&
              versions.type !== 'wer'
                ? $t('rating_system')
                : $t('rating')
            }}
          </span>
        </WButtonsBase>
      </div>

      <hr class="border-gray-700 my-2" />
      <div v-if="concepts.length" :class="expanded ? '' : 'mt-2'">
        <h3
          :class="expanded ? 'block' : 'hidden'"
          class="text-xs text-gray-1100 leading-5 font-bold uppercase font-museo-sans"
        >
          {{
            versions.type !== 'v2-hsr' &&
            versions.type !== 'wpr' &&
            versions.type !== 'wer'
              ? $t('concepts')
              : $t('action areas')
          }}
        </h3>

        <div
          v-for="concept in concepts"
          :key="concept.id"
          :expanded="$route.params.conceptName === concept.name.toLowerCase()"
        >
          <div class="flex w-full text-left text-13 text-tertiary-1200 image">
            <WButtonsBase
              type="subNav3"
              :icon="!expanded ? '' : null"
              :class="[
                currentTab === concept.name.toLowerCase()
                  ? 'bg-blue-1500 text-white'
                  : 'text-tertiary-1200 hover:bg-primary-1300',

                'text-left',
                'image leading-6 text-white focus:bg-blue-1500 focus:text-white ',
              ]"
              @click.native="
                $store.commit(
                  'settings/setSidebarTab',
                  concept.name.toLowerCase()
                ),
                  $router.push(
                    $i18n.locale === 'en'
                      ? `/${$i18n.locale}/${
                          $route.params.version
                        }/${concept.name.toLowerCase()}`
                      : `/${$i18n.locale}/${
                          $route.params.version
                        }/${concept.name.toLowerCase()}`
                  ),
                  toggleExpand()
              "
              ><span>
                <img
                  :class="[
                    currentTab === concept.name.toLowerCase()
                      ? 'filter brightness-0 invert'
                      : null,
                    'w-10',
                    expanded &&
                    (versions.type === 'v2-hsr' ||
                      versions.type === 'wpr' ||
                      versions.type === 'wer')
                      ? 'hidden'
                      : '',
                  ]"
                  :src="`${$config.s3Url}/${concept.icon}`"
                  :alt="concept.name"
              /></span>
              <span v-if="expanded" :class="['capitalize font-medium']">{{
                concept.name
              }}</span>
            </WButtonsBase>
          </div>
        </div>
      </div>
      <LoadingList v-else />

      <hr class="border-gray-700 mt-2" />

      <WButtonsBase
        icon="menu"
        type="subNav2"
        :class="[
          currentTab === 'glossary'
            ? 'bg-blue-1500 text-white'
            : 'text-tertiary-1200 hover:bg-primary-1300',
          ' leading-6 mt-2  text-white focus:bg-blue-1500 focus:text-white ',
        ]"
        @click.native="
          $router.push(`/${$i18n.locale}/${$route.params.version}/glossary`),
            toggleExpand()
        "
      >
        <span v-if="expanded" class="ml-4">
          {{ $t('glossary') }}</span
        ></WButtonsBase
      >

      <WButtonsBase
        icon="paperclip"
        type="subNav2"
        :class="[
          currentTab === 'appendix'
            ? 'bg-blue-1500 text-white'
            : 'text-tertiary-1200 hover:bg-primary-1300',
          '  leading-6  text-white focus:bg-blue-1500 focus:text-white ',
        ]"
        @click.native="
          $router.push(`/${$i18n.locale}/${$route.params.version}/appendix`),
            toggleExpand()
        "
      >
        <span v-if="expanded" class="ml-4">
          {{ $t('appendix') }}</span
        ></WButtonsBase
      >

      <WButtonsBase
        icon="paperclip"
        type="subNav2"
        :class="[
          currentTab === 'resources'
            ? 'bg-blue-1500 text-white'
            : 'text-tertiary-1200 hover:bg-primary-1300',
          'mb-2 leading-6  text-white focus:bg-blue-1500 focus:text-white ',
        ]"
        @click.native="
          $router.push(`/${$i18n.locale}/${$route.params.version}/resources`),
            toggleExpand()
        "
      >
        <span v-if="expanded" class="ml-4">{{
          $t('resources')
        }}</span></WButtonsBase
      >
    </client-only>
  </aside>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Sidebar',
  data() {
    return {
      styleObject: {},
    }
  },
  computed: {
    ...mapState({
      currentTab: (state) => state.settings.sidebarTab,
      concepts: (state) => state.standard.concepts,
      versions: (state) => state.standard.versions,
      features: (state) => state.standard.features,
    }),
    expanded() {
      // if (this.$store.state.settings.navExpanded == null) {
      //   return true
      // }
      // if (this.$store.state.settings.navExpanded === 'false') {
      //   return false
      // }
      // if (this.$store.state.settings.navExpanded === 'true') {
      //   return true
      // }
      return this.$store.state.settings.navExpanded
    },
  },
  methods: {
    toggleExpand() {
      let currentState = this.$store.state.settings.navExpanded
      if (process.client) {
        if (window.innerWidth <= 767) {
          if (currentState === 'false' || currentState === null) {
            currentState = false
          }
          if (currentState === 'true') {
            currentState = true
          }
          this.$store.commit('settings/setNavState', !currentState)
        }
      }
    },
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}

.image:hover img {
  filter: brightness(0) invert(1);
}
.image:focus img {
  filter: brightness(0) invert(1);
}
</style>
