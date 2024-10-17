<template>
  <div class="mx-auto max-w-md py-20">
    <WLinksBase type="navPrimary" link="/user/login" icon="arrow-narrow-left">
      Back to login
    </WLinksBase>
    <form class="space-y-6" @submit.prevent="sendForgotEmail">
      <div>
        <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
          Forgot password
        </h2>
        <p class="font-light mt-2">
          Enter your email to reset the password for your WELL account.
        </p>
      </div>
      <FormulateInput
        v-model="email"
        label="Email"
        name="Email"
        type="email"
        :error="error"
        :required="true"
      />

      <div>
        <FormulateInput type="submit" label="Request Password" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      error: false,
      success: false,
    }
  },
  //   methods: {
  //     async sendForgotEmail() {
  //       try {
  //         await this.$axios.get('/api/forgotPass/' + this.email)
  //         this.error = false
  //         this.email = ''
  //         this.$emit(
  //           'form-message',
  //           'success',
  //           'Great! We have sent you an email with further instructions on resetting your password.'
  //         )
  //       } catch (error) {
  //         this.error = true
  //         this.$emit(
  //           'form-message',
  //           'error',
  //           'We are unable to locate an account with the email address provided. Please check and try again!'
  //         )
  //       }
  //     },
  //   },
}
</script>
