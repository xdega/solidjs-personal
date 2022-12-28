import { For } from "solid-js";
import { createStore } from "solid-js/store";
import { useForm } from "../util/useForm";

const Links = () => {
  const { form, updateFormField, submit, clearField } = useForm();

  type Link = {
    label: string;
    url: string;
  };

  interface Links extends Array<Link> {}

  const [links, setLinks] = createStore<Links>([
    {
      label: "",
      url: "",
    },
  ]);

  const handleSubmit = (event: Event): void => {
    event.preventDefault();

    const newItem = { label: form.label, url: form.url } as Link;

    // Update UI
    setLinks([...links, newItem]);

    // Submit Form
    submit(form);
  };

  const addLink = () => {
    //
  };

  return (
    <>
      <ul>
        {
          <For each={links}>
            {(link, index) => <li data-index={index()}>{link.label}</li>}
          </For>
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="name">Label:</label>
          <input
            type="text"
            id="label"
            value={form.label}
            onChange={updateFormField("label")}
          />
        </div>
        <div class="form-control">
          <label for="name">Url:</label>
          <input
            type="url"
            id="url"
            value={form.url}
            onChange={updateFormField("url")}
          />
        </div>
        <input class="form-submit" type="submit" value="Add Link" />
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  );
};

export default Links;
