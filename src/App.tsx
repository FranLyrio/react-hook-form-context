import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./Form";
import { RegisterAddressForm } from "./RegisterAddressForm";
import { IRegisterAddressForm } from "./RegisterAddressForm/types";
import { RegisterPersonForm } from "./RegisterPersonForm";
import { IRegisterPersonForm } from "./RegisterPersonForm/types";

interface RegisterForm {
  address: IRegisterAddressForm;
  person: IRegisterPersonForm;
}

export function App() {
  const methods = useForm();

  const onSubmit = (data: RegisterForm) => console.log(data);

  return (
    <div className="App">
      {/* <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <RegisterPersonForm />

          <br />
          <br />

          <RegisterAddressForm />

          <button>Registrar</button>
        </form>
      </FormProvider> */}

      <Form
        onSubmit={onSubmit}
        initialValues={{ person: { name: "Franciele" } }}
      >
        <RegisterPersonForm />

        <br />
        <br />

        <RegisterAddressForm />

        <button>Registrar</button>
      </Form>
    </div>
  );
}
