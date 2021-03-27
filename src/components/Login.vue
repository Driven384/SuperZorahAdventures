<!-- This is the login component
  - Name input
  - Password input
  - validation
  - Set Cookie: 24 hours
  - Set Cookie: Name
  - Go to intro if Cookie is not set
  - else go to home
-->

<template>
  <div id="login">
    <div id="Login-email"></div>
    <div id="Login-google"></div>
    <div id="Sign-up">
      <div class="content">
        <b-field label="Name" type="text">
          <b-input v-model.trim="$v.name.$model"></b-input>
          <div class="error" v-if="!$v.name.required">Field is required</div>
        </b-field>

        <b-field label="Email" type="email">
          <b-input v-model.trim="$v.email.$model"></b-input>
          <div class="error" v-if="!$v.email.required">Field is required</div>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model.trim="$v.password.$model" password-reveal></b-input>
          <div class="error" v-if="!$v.password.required">Field is required</div>
        </b-field>
        <b-button class="is-primary" @click="signUp()">Sign up</b-button>
      </div>
    </div>
    <div id="toc-privacy"></div>
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';

export default {
  name: 'Login',

  data() {
    return {
      name: "",
      email: "",
      password: "",
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      between: between(20, 30)
    },
    password: {
      between: between(20, 30)
    }
  },

  methods: {
    signUp() {
      console.log('sign up')
    }
  }
}
</script>
