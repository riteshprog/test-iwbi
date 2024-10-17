<template>
  <section
    v-if="versions"
    class="overflow-y-auto mt-2 md:mt-0 md:mx-4 flex-1 md:pr-4 h-full"
  >
    <div class="bg-white p-5 mb-10">
      <h1 class="text-xl font-medium text-gray-50 leading-8">Resources</h1>
      <hr class="my-4 border-gray-900" />
      <div class="flex flex-wrap -m-4">
        <div
          v-for="res in resourcesFirstDeck"
          :key="res.link"
          class="p-4 w-full md:w-1/3"
        >
          <div
            class="h-full flex flex-col border border-gray-900 rounded overflow-hidden"
          >
            <img class="w-full" :src="res.image" :alt="res.image" />
            <div class="p-5 flex-1">
              <WLinksBase
                :link="`${res.link}`"
                target="_blank"
                type="primary"
                class="text-lg"
              >
                {{ res.title }}
              </WLinksBase>
              <p class="text-gray-50 font-light text-sm">
                {{ res.description }}
              </p>
            </div>
            <div class="bg-gray-1000 p-4 border-t border-gray-900">
              <a
                :href="res.link"
                target="_blank"
                class="inline-flex active:text-blue-1200 text-blue-1300 hover:text-blue-1200 transition duration-150 ease-in-out h-full font-light"
                >Access Now</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 mt-6">
        <article
          v-for="rsc in resourcesSecondDeck.filter((a) => a.title !== '')"
          :key="rsc.link"
          class="p-4 md:w-1/3"
        >
          <div
            class="h-full flex flex-col border border-gray-900 rounded overflow-hidden"
            :class="rsc.image === '' ? 'hidden' : ''"
          >
            <img class="w-full" :src="rsc.image" :alt="rsc.image" />
            <div class="p-4 space-y-2">
              <WLinksBase
                :link="`${rsc.link}`"
                target="_blank"
                type="primary"
                class="text-lg"
              >
                {{ rsc.title }}
              </WLinksBase>
              <p class="text-gray-50 font-light text-sm">
                {{ rsc.description }}
              </p>
            </div>
            <div class="bg-gray-1000 p-4 mt-auto border-t border-gray-900">
              <a
                :href="rsc.link"
                class="inline-flex active:text-blue-1200 text-blue-1300 hover:text-blue-1200 transition duration-150 ease-in-out h-full font-light"
                >Access Now</a
              >
            </div>
          </div>
        </article>
      </div>
      <p
        class="bg-blue-1400 font-light mt-8 p-4 text-tertiary-1300 mb-6 leading-7"
      >
        Looking for additional resources? Visit our
        <a
          href="https://resources.wellcertified.com/"
          target="_blank"
          class="text-blue-1200"
          >resource library</a
        >
        for more tools, templates and frequently asked questions.
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'sidebar',
  computed: {
    ...mapState({
      versions: (state) => state.standard.versions,
    }),

    resourcesFirstDeck() {
      if (this.versions.type === 'wpr') {
        return [
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/1000x500/9f7fb86e9a/wpr-thumbnail.png',
            link: 'http://api.well.support/api/files/download/7e42a2d1-8139-405f-a0c8-d57e941b337d?origin=https%3A%2F%2Fwell.support',
            title: 'WELL Performance Rating Sensor Data Template',
            description: 'A documentation template for sensor data.',
          },
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/1000x500/9f7fb86e9a/wpr-thumbnail.png',
            link: 'https://api.well.support/api/files/download/76283189-d2ae-4289-a580-f6c9450927db?origin=https%3A%2F%2Fwww.well.support',
            title: 'WELL Performance Rating Alignment Tool',
            description:
              'This tool identifies the alignment between the WELL Performance Rating features and features within WELL v2, the WELL v2 pilot and WELL v1.',
          },
        ]
      }
      if (this.versions.type === 'v2') {
        return [
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/960x540/2f0f842fd4/well-v2-is-here.png',
            link: 'https://well.support/download-the-enhanced-accessibility-version-of-the-well-standard~0a33776a-0700-4d80-a066-7411836f11ab',

            title: 'Enhanced accessibility | WELL v2',

            description:
              'Enhanced accessibility version of the WELL Building Standard v2, with imperial units. ',
          },
          {
            image:
              '  https://img2.storyblok.com/333x166/smart/f/52232/1000x500/72d8c80322/resource-presentation.png',
            link: 'http://api.well.support/api/files/download/6212f5e5-e05a-47cc-ab18-9d66eb6c1b34?origin=https%3A%2F%2Fwell.support',

            title: 'WELL v2 - Presentation',

            description: 'Educate your community about WELL v2. ',
          },
        ]
      }
      if (this.versions.type === 'v2-pilot') {
        return [
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/4167x2084/a0179569aa/well-community-email-headers_well-v2-email-header-copy.png ',
            link: 'https://well.support/download-the-enhanced-accessibility-version-of-the-well-standard~0a33776a-0700-4d80-a066-7411836f11ab',

            title: 'Enhanced Accessibility | WELL v2 pilot',

            description:
              'Enhanced accessibility version of the WELL v2 pilot. ',
          },
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/1000x500/72d8c80322/resource-presentation.png',
            link: 'http://api.well.support/api/files/download/6212f5e5-e05a-47cc-ab18-9d66eb6c1b34?origin=https%3A%2F%2Fwell.support',

            title: 'WELL v2 - Presentation',

            description:
              'Educate your community about WELL v2. Please note, this presentation focuses on WELL v2 and occasionally refers to WELL v1 and WELL v2 pilot. ',
          },
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/1000x500/58868538f8/unnamed-1.png',
            link: 'https://well.support/well-program-guidebook~1a3c73d0-ef71-4e4f-ab90-6cdb19bce09d',

            title: 'WELL Program Guidebook',

            description:
              'A step-by-step guide to the WELL certification process. ',
          },
        ]
      }
      if (this.versions.type === 'community') {
        return [
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/1200x628/8f6fc844b0/community-standards-launch.png  ',
            link: 'https://well.support/download-the-enhanced-accessibility-version-of-the-well-standard~0a33776a-0700-4d80-a066-7411836f11ab',

            title: 'Enhanced Accessibility | WELL Community Standard',

            description:
              'Enhanced accessibility version of the WELL Community Standard. ',
          },
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/1000x500/879c8f8f6b/resource-presentation.png',
            link: 'http://api.well.support/api/files/download/c2ca5c03-da21-4a41-b7bf-dcdc32b24e82?origin=https%3A%2F%2Fwell.support ',

            title: 'WELL Community - Presentation',

            description:
              'Learn more about this district-rating program for healthy communities. ',
          },
          {
            image:
              ' https://img2.storyblok.com/333x166/smart/f/52232/1000x500/89d125b03c/wellcommunitystandard-resource-thumbnail.png ',
            link: 'https://well.support/well-community-guidebook~981a9a79-2031-4498-9e3d-cef2e1b8f544',

            title: 'WELL Community - Certification Guidebook   ',

            description:
              'A step-by-step guide to the WELL certification process for WELL Community Standard projects ',
          },
        ]
      }
      if (this.versions.type === 'v2-hsr') {
        return [
          {
            image:
              ' https://img2.storyblok.com/600x300/smart/f/52232/1000x500/bfa9c29fde/preso-2.png ',
            link: 'http://api.well.support/api/files/download/2e721262-0c8e-40ad-8838-e428448d5667?origin=https%3A%2F%2Fwell.support',

            title: 'WELL Health-Safety Rating Program Overview',

            description:
              ' closer look at the six themes that make up the WELL Health-Safety Rating. ',
          },
          {
            image:
              'https://img2.storyblok.com/600x300/smart/f/52232/1000x500/2cf3d46d77/guidebook.png',
            link: 'https://well.support/well-program-guidebook~1a3c73d0-ef71-4e4f-ab90-6cdb19bce09d',

            title: 'WELL Health-Safety Rating Guidebook',

            description:
              'A step-by-step guide to implementing and achieving the WELL Health-Safety Rating. ',
          },
          {
            image:
              'https://img2.storyblok.com/600x300/smart/f/52232/1000x500/b659cb5835/preso.png ',
            link: 'https://a.storyblok.com/f/52232/x/f8e62313f9/health-safety-rating-presentation.pdf',

            title: 'WELL Health-Safety Rating Presentation ',

            description: 'A slide deck highlighting details of the rating.',
          },
        ]
      }
      return []
    },
    resourcesSecondDeck() {
      if (this.versions.type === 'wpr') {
        return [
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/2085x1043/4f901b5440/wellratingguidelines_thumbnail.png',
            link: 'https://well.support/well-program-guidebook~1a3c73d0-ef71-4e4f-ab90-6cdb19bce09d',
            title: 'WELL Ratings Guidebook',
            description:
              'A step-by-step guide to implementing and achieving WELL Ratings.',
          },
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/4167x2084/b85a952eb1/thewellperformanceverificationguidebook_thumbnail.png',
            link: 'https://well.support/well-performance-verification-guidebook~7425ac3d-8e17-47fc-aeef-6f176258ddc1',
            title: 'WELL Performance Verification Guidebook',
            description:
              'Applies to WELL v1, WELL v2, the WELL v2 pilot and the WELL Performance Rating.',
          },
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/1000x500/2ffbf388b4/wpr-thumbnail.png',
            link: 'https://api.well.support/api/files/download/efa2ca69-6862-4b61-a3fb-0be2841da0f5?origin=https%3A%2F%2Fwww.well.support',
            title: 'WELL to WELL Ratings Gap Analysis',
            description:
              'See how features achieved in WELL translate to the minimum feature requirements in a WELL rating',
          },
        ]
      }
      if (this.versions.type === 'v2') {
        return [
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/1000x500/58868538f8/unnamed-1.png',
            link: 'https://well.support/well-program-guidebook~1a3c73d0-ef71-4e4f-ab90-6cdb19bce09d',
            title: 'WELL Program Guidebook ',
            description:
              'A step-by-step guide to the WELL certification process.',
          },
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/4167x2084/b85a952eb1/thewellperformanceverificationguidebook_thumbnail.png',
            link: 'https://well.support/well-performance-verification-guidebook~7425ac3d-8e17-47fc-aeef-6f176258ddc1',
            title: 'WELL Performance Verification Guidebook ',
            description:
              'A step-by-step guide to the performance verification process.',
          },
        ]
      }
      if (this.versions.type === 'v2-pilot') {
        return [
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/4167x2084/b85a952eb1/thewellperformanceverificationguidebook_thumbnail.png',
            link: 'https://well.support/well-performance-verification-guidebook~7425ac3d-8e17-47fc-aeef-6f176258ddc1',
            title: 'WELL Performance Verification Guidebook  ',
            description:
              'A step-by-step guide to the performance verification process.',
          },
        ]
      }
      if (this.versions.type === 'community') {
        return [
          {
            image:
              'https://img2.storyblok.com/333x166/smart/f/52232/1000x500/2ab2d7531b/performanceverification-resource-thumbnail.png',
            link: 'https://well.support/well-community-performance-verification-guidebook~cdbcc27e-d2f3-4bb9-a126-81861e15ce80',
            title: 'WELL Community - Performance Verification Guidebook ',
            description: 'WELL Community - Performance Verification Guidebook ',
          },
          {
            image:
              'https://img2.storyblok.com/600x300/smart/f/52232/1000x500/f32911fb01/resource-checklist.png',
            link: 'https://well.support/download-a-well-scorecard~be1f1dbc-6261-4a93-9876-66612f348e60',
            title: 'WELL Community - Project Scorecard  ',
            description:
              'Use this static scorecard to plan and implement WELL Community Standard features.',
          },
        ]
      }
      if (this.versions.type === 'v2-hsr') {
        return [
          {
            image:
              'https://img2.storyblok.com/600x300/smart/f/52232/1000x500/c1e9c5643c/feature-alignment.png',
            link: 'https://api.well.support/api/files/download/26b0aae5-3b3a-432f-a974-31d3c9c20eda?origin=https%3A%2F%2Fwww.well.support',
            title: 'WELL Health-Safety Rating Feature Alignment Tool',
            description:
              'This tool identifies the alignment between the WELL Health-Safety Rating features and the features within the existing WELL Building Standard, for WELL v1 and the WELL v2 pilot.',
          },
          {
            image:
              'https://img2.storyblok.com/600x300/smart/f/52232/1000x500/1cdb4677ea/resource-project-tool.png',
            link: 'http://api.well.support/api/files/download/bbbb6da1-1d5d-4d17-adcb-31d31b85c1eb?origin=https%3A%2F%2Fwell.support',
            title:
              'WELL Health-Safety Rating Multiple Projects Documentation Sharing form',
          },
        ]
      }
      return []
    },
  },

  async created() {
    if (
      !this.versions ||
      this.versions.version !== this.$route.params.version
    ) {
      await this.$store.dispatch('standard/fetchLatestVersion', {
        currentVersion: this.$route.params.version,
        conceptName: this.$route.params.conceptName,
      })
    }
    this.$store.commit('settings/setSidebarTab', 'resources')
  },
}
</script>

<style></style>
