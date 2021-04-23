import { email, required, minLength, helpers } from "@vuelidate/validators";

const passwordMinLength = 5;

const rules = {
  userEmail: {
    email: helpers.withMessage("This is email is badly formatted", email),
    required,
  },
  userPassword: {
    minLength: helpers.withMessage(
      "The password is invalid or the user doesn't have a password",
      minLength(passwordMinLength)
    ),
    required,
  },
};

export default rules;
