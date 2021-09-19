// import { useFormContext } from "react-hook-form";

import { useFormContext } from "../Form";

export function RegisterAddressForm() {
  const { methods } = useFormContext();

  const { register } = methods;

  return (
    <>
      <input placeholder="Nome da rua" {...register("address.street")} />
      <input placeholder="Número da casa" {...register("address.number")} />
      <input placeholder="CEP" {...register("address.zipCode")} />
      <input placeholder="Complemento" {...register("address.complement")} />
      <input placeholder="Estado" {...register("address.state")} />
    </>
  );
}
