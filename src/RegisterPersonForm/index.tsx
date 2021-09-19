import { useFormContext } from "react-hook-form";

export function RegisterPersonForm() {
  const { register } = useFormContext();

  return (
    <>
      <input placeholder="Digite seu nome" {...register("person.name")} />
      <input placeholder="Informe seu cpf" {...register("person.cpf")} />
      <input placeholder="Telefone de contato" {...register("person.phone")} />
    </>
  );
}
