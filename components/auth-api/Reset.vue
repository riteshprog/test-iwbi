<template>
  <div class="mx-auto max-w-md py-20">
    <WLinksBase type="navPrimary" link="/user/login" icon="arrow-narrow-left">
      Back to login
    </WLinksBase>
    <div>
      <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900 mb-3">
        Reset password
      </h2>
    </div>
    <FormulateForm
      class="space-y-6"
      name="form"
      :form-errors="formErrors"
      @submit="handleSubmit"
    >
      <FormInputsInputLabel
        v-model="password"
        name="Enter New Password"
        type="password"
        :error="error"
        validation="required"
      />
      <FormInputsInputLabel
        v-model="password_confirmation"
        name="Confirm New Password"
        type="password"
        :error="error"
        validation="required"
      />
      <div>
        <FormulateInput type="submit" label="Change Password" />
      </div>
      <FormulateErrors class="my-2 p-2 text-base text-center text-red-500" />
    </FormulateForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formErrors: [],
      password: '',
      password_confirmation: '',
      error: false,
    }
  },
  //   methods: {
  //     async sendForgotEmail() {
  //       try {
  //         await this.$axios.get('/api/forgotPass/' + this.email)
  //         this.error = false
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
  //     handleSubmit() {
  //       const payload = {
  //         verify_token: this.$route.params.token,
  //         password: this.password,
  //       }

  //       if (this.password_confirmation === this.password) {
  //         this.$store
  //           .dispatch('authentication/resetPassword', payload)
  //           .then(() => {
  //             this.$router.push('/user/profile')
  //           })
  //           .catch(() => {
  //             this.$router.push('/user/forgot-password')
  //             this.error = true
  //             this.$emit(
  //               'form-message',
  //               'error',
  //               'We are unable to reset your password. Please check and try again!'
  //             )
  //           })
  //       } else {
  //         this.formErrors = ['Both fields must match!']
  //       }
  //     },
  //   },
}
</script>
