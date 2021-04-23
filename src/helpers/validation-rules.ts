import { email, required, minLength, helpers } from "@vuelidate/validators";

const passwordMinLength = 5;
const passwordError =
  "The password is invalid or the user doesn't have a password";

const rules = {
  userEmail: {
    email: helpers.withMessage("This email is badly formatted", email),
    required: helpers.withMessage("Email is required", required),
  },
  userPassword: {
    minLength: helpers.withMessage(passwordError, minLength(passwordMinLength)),
    required: helpers.withMessage(passwordError, required),
  },
};

export default rules;
