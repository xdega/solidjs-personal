import { createStore } from "solid-js/store";

// todo: This should be dynamic
type FormFields = {
  label?: string;
  url?: string;
};

const submit = (form: FormFields) => {
  const dataToSubmit = {
    label: form.label,
    url: form.url,
  };
  // should be submitting your form to some backend service
  console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
};
const useForm = () => {
  const [form, setForm] = createStore<FormFields>({
    label: "",
    url: "",
  });

  const clearField = (fieldName: string) => {
    setForm({
      [fieldName]: "",
    });
  };

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    if (inputElement.type === "checkbox") {
      setForm({
        [fieldName]: !!inputElement.checked,
      });
    } else {
      setForm({
        [fieldName]: inputElement.value,
      });
    }
  };

  return { form, submit, updateFormField, clearField };
};

export { useForm };
