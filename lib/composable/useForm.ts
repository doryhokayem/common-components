import type { FormInstance } from "element-plus";
export const useForm = () => {
  const submitForm = (formEl: FormInstance | undefined, emit?: Function) => {
    if (!formEl) return;
    return formEl.validate((valid, fields) => {
      if (valid) {
        if (emit) {
          emit("submitForm");
        }
      } else {
        console.log("error submit!", fields);
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  return {
    resetForm,
    submitForm,
  };
};
