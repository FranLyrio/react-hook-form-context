// import { useFormContext } from "react-hook-form";

import { useFormContext } from "../Form";

export function RegisterPersonForm() {
  const { methods } = useFormContext();

  const { register } = methods;

  return (
    <>
      <input placeholder="Digite seu nome" {...register("person.name")} />
      <input placeholder="Informe seu cpf" {...register("person.cpf")} />
      <input placeholder="Telefone de contato" {...register("person.phone")} />
    </>
  );
}
