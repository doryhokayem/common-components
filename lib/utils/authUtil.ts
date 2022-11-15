import { reactive } from "vue";
import type { FormRules } from "element-plus";
import type { ILoginInput } from "./interfaces/types";
const AuthUtils = (function () {
  const rules = reactive<FormRules>({
    email: [
      {
        required: true,
        message: "Please enter your email",
        trigger: "change",
      },
    ],
    password: [
      {
        required: true,
        message: "Please enter your Password",
        trigger: "change",
      },
    ],
  });
  const formLogin: ILoginInput = reactive({
    email: "",
    password: "",
  });
  return {
    rules,
    formLogin,
  };
})();
export default AuthUtils;
