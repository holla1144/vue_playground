<template>
  <header class="w-100 bb">
    <Logo />
    <nav>
      <ul>
        <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        <li v-if="isLoggedIn" @click="logOut"><a>Log out</a></li>
        <template v-else>
          <li @click="loginModalOpen = true">Log In/Register</li>
          <Modal @modalCloseRequest="closeLoginModal" :isOpen="loginModalOpen">
            <form class="loginForm">
              <h3>{{ modalTitle }}</h3>
              <div>
                <p class="loginForm-error" v-if="error">Whoops, {{ error }}</p>
                <TextInput
                  label="username"
                  id="username"
                  v-model="username"
                  :isValid="usernameValid"
                  :showValidations="showValidations"
                />
                <TextInput
                  label="password"
                  id="password"
                  v-model="password"
                  :isValid="passwordValid"
                  :showValidations="showValidations"
                  type="password"
                />

                <button v-if="fieldsValid" @click.prevent="submitForm">Submit</button>

                <div class="loginForm-footer">
                  <p v-if="formType === 'login'">
                    Don't have an account? Register <span @click="toggleFormType">here</span>.
                  </p>
                  <p v-else>
                    Already have an account? Click <span @click="toggleFormType">here</span> to log in.
                  </p>
                </div>
              </div>
            </form>
          </Modal>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
  import Logo from "./Logo.vue";
  import Modal from "../Modal.vue";
  import router from "../../router";
  import TextInput from "../TextInput.vue";
  import {
    CLEAR_ERROR,
    LOGIN,
    LOGOUT,
    REGISTER
  } from "../../store/actions.type";

  const initialForm = () => {
    return {
      formError: "",
      password: "",
      showValidations: false,
      username: ""
    };
  };

  const initialState = () => {
    return {
      ...initialForm(),
      formType: "login",
      loginModalOpen: false,
    };
  };

  export default {
    computed: {
      error() {
        return this.$store.state.auth.errors || this.formError;
      },

      formAction() {
        return this.formType === "login" ? LOGIN : REGISTER;
      },

      fieldsValid() {
        return this.passwordValid && this.usernameValid;
      },

      isLoggedIn() {
        return this.$store.state.auth.isAuthenticated;
      },

      modalTitle() {
        return this.formType === "login" ? "Log In" : "Create Account";
      },

      passwordValid() {
        return this.password.length > 6;
      },

      usernameValid() {
        return this.username.length > 6;
      }
    },

    data() {
      return initialState();
    },

    watch: {
      username() {
        this.formError = "";
        this.showValidations = false;
      },

      password() {
        this.formError = "";
        this.showValidations = false;
      }
    },

    methods: {
      closeLoginModal() {
        this.$store.dispatch(`auth/${CLEAR_ERROR}`);
        Object.assign(this.$data, initialState());
      },

      logOut() {
        this.$store.dispatch(`auth/${LOGOUT}`);
        router.push({ name: "home" });
      },

      async submitForm() {
        if (!this.fieldsValid) {
          this.showValidationHints();
          return false;
        }

        await this.$store.dispatch(`auth/${this.formAction}`,
                { username: this.username, password: this.password });

        if (!this.error) {
          this.closeLoginModal();
          router.push({ name: "home" });
        }
      },

      toggleFormType() {
        this.formType = this.formType === "login" ? "register" : "login";
        Object.assign(this.$data, initialForm());
        this.$store.dispatch(`auth/${CLEAR_ERROR}`);
      },

      showValidationHints() {
        this.showValidations = true;
        this.formError = "password and username must be longer than 6 characters.";
        return false;
      },
    },

    components: {
      Logo,
      Modal,
      TextInput
    }
  }
</script>

<style lang="scss" scoped>
  header {
    align-content: center;
    display: flex;
    padding: 0 1em;

    nav {
      margin-left: auto;

      ul {
        display: flex;
        height: 100%;
        list-style-type: none;

        li {
          align-items: center;
          cursor: pointer;
          display: flex;
          padding: 0 20px;
        }
      }
    }
  }

  .loginForm {
    height: 100%;

    h3 {
      font-weight: bold;
      padding-bottom: 1.5em;
      text-transform: uppercase;
    }

    button {
      background-color: $green;
      border: 0;
      color: white;
      cursor: pointer;
      font-size: 1.25em;
      margin-bottom: 1em;
      padding: 0.75em 1.2em;
      text-transform: uppercase;
    }

    &-error {
      color: red;
      padding-bottom: 1em;
    }

    &-footer {
      span {
        color: $blue;
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid $blue;
        }
      }
    }
  }
</style>