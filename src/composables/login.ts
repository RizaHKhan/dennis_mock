import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import rules from "@/helpers/validation-rules.ts";

export const useLoginForm = () => {
  const userEmail = ref("");
  const userPassword = ref("");

  const v = useVuelidate(rules, { userEmail, userPassword });

  const handleBlur = (key: "userEmail" | "userPassword") => {
    v.value[key].$touch();
  };

  function validateOnSubmit(): void {
    v.value.$touch();
  }

  return {
    userEmail,
    userPassword,
    handleBlur,
    validateOnSubmit,
    v,
  };
};
