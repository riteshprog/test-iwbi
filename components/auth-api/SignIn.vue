<template>
  <div>
    <div v-if="authInProgress">
      <div class="mx-auto mt-5 text-center">
        <WLoadingSpinner class="mx-auto" />
        <div class="mt-3 text-primary-600">Please Wait. Logging you in...</div>
      </div>
      <div v-if="showDisclaimer" class="mt-5 text-sm italic">
        If you feel you are stuck on this screen please try clearing your cache
        with the following steps found
        <a
          href="https://well.support/f35861e3-9c73-405c-b441-04c17b3273d1"
          target="_blank"
          class="text-primary-600 cursor-pointer font-semibold"
        >
          here </a
        >.
      </div>
    </div>
    <div v-else>
      <form class="space-y-6" @submit.prevent="loginUser">
        <div>
          <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <FormulateInput
          v-model="login.email"
          label="Email"
          name="Email"
          type="email"
          :error="error"
          :required="true"
        />
        <FormulateInput
          label="Password"
          name="Password"
          type="password"
          :error="error"
          :required="true"
        />
        <div v-if="error" class="text-red-700 text-sm font-museo-sans">
          <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: x-circle -->
                <svg
                  class="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">
                  There was an error logging you in
                </h3>
                <div class="mt-2 text-sm text-red-700">
                  <ul class="list-disc pl-5 space-y-1">
                    <li>{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <nuxt-link
              to="/user/register"
              class="
                font-medium
                text-primary-600
                hover:text-primary-500
                focus:outline-none focus:underline
                transition
                ease-in-out
                duration-150
              "
            >
              Create an account
            </nuxt-link>
          </div>

          <div class="leading-5">
            <nuxt-link
              to="/user/forgot-password"
              class="
                font-medium
                text-primary-600
                hover:text-primary-500
                focus:outline-none focus:underline
                transition
                ease-in-out
                duration-150
              "
            >
              Forgot your password?
            </nuxt-link>
          </div>
        </div>

        <div>
          <FormulateInput type="submit" label="Sign In" />
        </div>
      </form>
      <div>
        <div class="mt-6 relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 bg-white text-gray-500"> OR </span>
          </div>
        </div>
        <div>
          <p class="text-sm leading-5 font-medium text-gray-700 text-center">
            Sign in with
          </p>

          <div class="mt-1 grid grid-cols-3 gap-3">
            <div>
              <span
                class="w-full inline-flex rounded-md shadow-sm"
                @click="$auth.loginWith('facebook')"
              >
                <WButtonsBase type="primaryInverted" icon="facebook" />
              </span>
            </div>

            <div>
              <span
                class="w-full inline-flex rounded-md shadow-sm"
                @click="$auth.loginWith('google')"
              >
                <WButtonsBase type="primaryInverted" icon="google" />
              </span>
            </div>

            <div>
              <span
                class="w-full inline-flex rounded-md shadow-sm"
                @click="$auth.loginWith('linkedin')"
              >
                <WButtonsBase type="primaryInverted" icon="linkedin" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      authInProgress: false,
      showDisclaimer: false,
      error: null,
    }
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth,
    }),
  },
  // created() {
  //   if (
  //     this.$cookies.get('authentication.token') ||
  //     this.$cookies.get('authentication.code')
  //   ) {
  //     this.authInProgress = true
  //   }
  // },
  // async mounted() {
  //   if (this.$auth.$state.strategy !== 'local') {
  //     this.authInProgress = true
  //     await setTimeout(() => {
  //       this.showDisclaimer = true
  //     }, 3000)
  //     try {
  //       await this.$store.dispatch('authentication/socialLogin', {
  //         provider: this.$auth.$state.strategy,
  //         token: this.$cookies.get('authentication.code'),
  //         redirect_url: window.location.origin + '/user/login',
  //       })
  //       if (this.$cookies.get('sso.subscriber')) {
  //         await this.$router.push(this.$cookies.get('sso.subscriber'))
  //       } else {
  //         await this.$router.push('/')
  //       }
  //     } catch (error) {
  //       this.error = error.response.data.message
  //       this.$emit('form-message', 'error', error.response.data.message)
  //       this.authInProgress = false
  //     }
  //   } else if (this.$auth.loggedIn && this.$auth.$state.strategy === 'local') {
  //     this.authInProgress = true
  //     this.$router.push('/')
  //   }
  // },
  // methods: {
  //   async loginUser() {
  //     try {
  //       const response = await this.$store.dispatch('authentication/login', {
  //         email: this.login.email,
  //         password: this.login.password,
  //         is_sso: !!this.$route.params.subscriber,
  //         sso_subscriber: this.$route.params.subscriber,
  //         sso_redirect: this.$route.query.sso_redirect,
  //         return_to: this.$route.query.return_to,
  //       })

  //       if (response) {
  //         window.location.href = response
  //       } else {
  //         await this.$router.push('/')
  //       }
  //     } catch (error) {
  //       this.error = error.response.data.message
  //       this.$emit('form-message', 'error', error.response.data.message)
  //     }
  //   },
  //   async authUsingSocialProvider(provider) {
  //     await this.$auth.loginWith(provider).then((response) => {
  //       this.$store.dispatch('authentication/socialLogin', {
  //         provider,
  //         token: this.$auth.strategy.token.get(),
  //         redirect_url: '/user/login',
  //       })
  //     })
  //   },
  // },
}
</script>
