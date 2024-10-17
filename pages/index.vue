<template>
  <div class="m-4 bg-white">
    <ForumBannerPopup ref="forumBanner" />

    <div class="max-w-5xl mx-auto">
      <section class="md:px-10 pt-8 md:pt-16 :xl:pt-20">
        <h1
          class="text-4xl text-center md:text-5xl leading-10 md:leading-12 md:mb-2 font-medium text-gray-300 font-museo-slab mt-5"
        >
          Welcome to WELL
        </h1>
        <p
          class="text-gray-50 font-extralight text-18 leading-7 mt-4 md:mt-0 text-center md:text-left"
        >
          At the International WELL Building Institute (IWBI), we’re committed
          to transforming health and well-being with our people-first approach
          to buildings, organizations and communities. Since the launch of our
          WELL Building Standard (WELL) in 2014, 2,000+ companies, including
          over 100 of the Fortune 500, have adopted WELL as an evidence-based
          roadmap for scaling health across their organization.
        </p>
      </section>

      <section class="px-4 mt-7 md:mt-14">
        <div
          class="border-2 border-primary-400 bg-blue-900 mb-4 md:mb-10 p-4 rounded"
        >
          <div
            class="text-28 leading-8 mb-4 font-medium text-gray-300 text-center"
          >
            The WELL Building Standard (WELL)
          </div>
          <p
            class="font-light text-gray-50 text-sm mb-10 leading-5 text-center"
          >
            WELL applies the science of how physical and social environments
            affect human health, well-being and performance. Developed over 10
            years and backed by the latest scientific research, WELL outlines
            key building-level and organizational strategies across 10
            categories.
          </p>
          <div class="md:w-32 mx-auto mt-8">
            <WButtonsBase
              type="primary1"
              class="text-center text-sm leading-10 w-40"
              @click.native="
                $router.push(
                  $i18n.locale === 'en'
                    ? `/${$i18n.locale}/${latestVersions.v2.en}`
                    : `/${$i18n.locale}/${latestVersions.v2.cn}`
                )
              "
              >ACCESS NOW</WButtonsBase
            >
          </div>
        </div>
        <div class="flex flex-col md:items-center md:flex-row">
          <div class="px-5 mt-5">
            <h1
              class="text-4xl text-center md:text-4xl leading-10 md:leading-12 md:mb-2 font-medium text-gray-300 font-museo-slab"
            >
              WELL Ratings
            </h1>
            <p
              class="text-gray-50 font-extralight text-18 leading-7 mt-4 md:mt-0 text-center"
            >
              Take a targeted approach by focusing on a subset of WELL
              strategies that address specific themes such as, health, safety
              and performance.
            </p>
          </div>
        </div>
        <div class="mt-7 md:mt-14 mb-12">
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:px-0">
            <div
              class="border-2 border-gray-400 p-4 flex flex-col rounded text-center h-full"
            >
              <div
                class="text-xl leading-7 mb-4 mt-3 text-gray-300 font-medium"
              >
                WELL Health-Safety Rating
              </div>

              <p class="font-light leading-5 text-gray-50 text-sm mb-10">
                An evidence-based, third-party verified pathway for addressing
                acute health threats, including COVID-19 and beyond.
              </p>
              <div class="md:mx-auto md:w-36 mt-auto">
                <WButtonsBase
                  type="primary1"
                  class="text-center text-sm leading-10"
                  @click.native="
                    $router.push(
                      $i18n.locale === 'en'
                        ? `/${$i18n.locale}/${latestVersions.v2hsr.en}`
                        : `/${$i18n.locale}/${latestVersions.v2hsr.cn}`
                    )
                  "
                  >ACCESS NOW</WButtonsBase
                >
              </div>
            </div>
            <div
              class="border-2 border-gray-400 p-4 rounded flex flex-col text-center h-full"
            >
              <div
                class="text-xl leading-7 mt-3 mb-4 text-gray-300 font-medium"
              >
                WELL Performance Rating
              </div>
              <p class="font-light leading-5 text-gray-50 text-sm mb-10">
                An evidence-based, third-party verified pathway for measuring,
                benchmarking and improving building performance to support human
                health and well-being.
              </p>
              <div class="md:mx-auto md:w-36 mt-auto">
                <WButtonsBase
                  type="primary1"
                  class="text-center text-sm leading-10 uppercase"
                  @click.native="
                    $router.push(
                      $i18n.locale === 'en'
                        ? `/${$i18n.locale}/${latestVersions.wpr.en}`
                        : `/${$i18n.locale}/${latestVersions.wpr.cn}`
                    )
                  "
                  >Access Now</WButtonsBase
                >
              </div>
            </div>
            <div
              class="border-2 border-gray-400 p-4 rounded flex flex-col text-center h-full"
            >
              <div
                class="text-xl leading-7 mt-3 mb-4 text-gray-300 font-medium"
              >
                WELL Equity Rating
              </div>
              <p class="font-light leading-5 text-gray-50 text-sm mb-10">
                An evidence-based, third-party verified pathway for taking
                action toward diversity, equity and inclusion goals and driving
                improvements in company culture and employee health.
              </p>
              <div class="md:mx-auto md:w-36 mt-auto">
                <WButtonsBase
                  type="primary1"
                  class="text-center text-sm leading-10 uppercase"
                  @click.native="
                    $router.push(
                      $i18n.locale === 'en'
                        ? `/${$i18n.locale}/${latestVersions.wer.en}`
                        : `/${$i18n.locale}/${latestVersions.wer.cn}`
                    )
                  "
                  >Access Now</WButtonsBase
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-2 border-primary-400 bg-blue-900 mb-4 md:mb-10 p-4 rounded"
        >
          <div
            class="text-28 leading-8 mb-4 font-medium text-gray-300 text-center"
          >
            WELL Community Standard
          </div>
          <p
            class="font-light text-gray-50 text-sm mb-10 leading-5 text-center"
          >
            Expanded to the neighborhood scale, the WELL Community Standard
            applies the principles of WELL to a larger footprint with the goal
            of creating fully integrated and health-focused communities.
          </p>
          <div class="md:w-56 mx-auto mt-8">
            <WButtonsBase
              type="primary1"
              class="text-center text-sm leading-10"
              @click.native="
                $router.push(
                  $i18n.locale === 'en'
                    ? `/${$i18n.locale}/${latestVersions.community.en}`
                    : `/${$i18n.locale}/${latestVersions.community.cn}`
                )
              "
              >CHOOSE WELL COMMUNITY</WButtonsBase
            >
          </div>
        </div>
        <div class="px-4 mt-5 text-center italic">
          <span class="font-semi-bold"> Archived versions of&nbsp;</span>
          <WLinksBase class="inline-flex" @click.native="wellv1"
            >WELL v1&nbsp;</WLinksBase
          >
          and the&nbsp;
          <WLinksBase
            class="inline-flex"
            @click.native="
              $router.push(
                $i18n.locale === 'en'
                  ? `/${$i18n.locale}/${latestVersions.v2pilot.en}`
                  : `/${$i18n.locale}/${latestVersions.v2pilot.cn}`
              )
            "
            >WELL v2 pilot</WLinksBase
          >.
        </div>
      </section>

      <section class="px-4 mt-8 md:mt-14">
        <div
          class="text-center mb-8 text-3xl md:text-40 leading-9 md:leading-11 font-medium text-gray-300 font-museo-slab"
        >
          Putting what we know into what we practice
        </div>
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-10 lg:px-0 pb-8"
        >
          <WLandingOurValues
            v-for="(ourValueItem, index) in ourValueItems"
            :key="index"
            :thumbnail="ourValueItem.icon"
            :heading="ourValueItem.heading"
            :description="ourValueItem.description"
          />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      options: [
        {
          heading: 'TAKE ACTION',
          subHeading: ' Community',
          description:
            'We’re committed to improving global health by transforming the spaces where people spend their lives - and our suite of standards, geared toward both all types of buildings and communities, is designed to do exactly that. ',
          btnValue: 'Learn more',
        },
        {
          heading: 'TAKE ACTION',
          subHeading: ' Health-Safety Rating',
          description:
            'We’re committed to improving global health by transforming the spaces where people spend their lives - and our suite of standards, geared toward both all types of buildings and communities, is designed to do exactly that.',
          btnValue: 'Learn more',
        },
      ],
      ourValueItems: [
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/6ec220d89a/equitable.svg',
          heading: 'Equitable',
          description:
            'Benefits all types of people, especially those who need it the most',
        },
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/5b6a4d635a/global.svg',
          heading: 'Global',
          description:
            'Provides solutions that are applicable in countries around the world',
        },
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/3351b4c73d/technically-robust.svg',
          heading: 'Evidence-based',
          description:
            'Incorporates the latest science and public health research',
        },
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/74f1ecf3d1/evidence-based.svg',
          heading: 'Technically Robust',
          description:
            'Confirms achievement through rigorous third-party review',
        },
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/eada6e77c0/customer-focused.svg',
          heading: 'Customer Focused',
          description:
            'Prioritizes customer success through personalized technical support',
        },
        {
          icon: 'https://a.storyblok.com/f/52232/64x64/d874b1edff/resilient.svg',
          heading: 'Resilient',
          description: 'Evolves overtime to incorporate new findings',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      popupDismissed: (state) => state.authentication.popupDismissed,
      latestVersions: (state) => state.standard.latestVersions,
    }),
  },
  created() {
    //  reloadPage() {
    //   window.location.reload();
    // }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.forumBanner.showBanner = true
    }, 3000)
  },
  methods: {
    wellv1() {
      if (process.client) {
        window.open(
          'https://www.wellcertified.com/certification/v1/standard',
          '_blank'
        )
      }
    },
  },
}
</script>
