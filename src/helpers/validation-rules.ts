import { email, required, minLength, helpers } from "@vuelidate/validators";

const passwordMinLength = 5;
const passwordError =
  "The password is invalid or the user doesn't have a password";

const rules = {
  userEmail: {
    email: helpers.withMessage("This is email is badly formatted", email),
    required,
  },
  userPassword: {
    minLength: helpers.withMessage(passwordError, minLength(passwordMinLength)),
    required: helpers.withMessage(passwordError, required),
  },
};

export default rules;
