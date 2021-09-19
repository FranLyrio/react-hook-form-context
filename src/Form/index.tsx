import { createContext, ReactNode, useContext, useEffect } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

interface FormContextProps {
  methods: UseFormReturn;
}

interface FormProps {
  onSubmit: (data: any) => void;
  children: ReactNode;
  initialValues?: any;
}

const FormContext = createContext({} as FormContextProps);

function Form({ children, onSubmit, initialValues }: FormProps) {
  const methods = useForm();

  useEffect(() => {
    methods.reset(initialValues);
  }, []);

  return (
    <FormContext.Provider value={{ methods }}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
}

function useFormContext() {
  const context = useContext(FormContext);

  return context;
}

export { Form, useFormContext };
