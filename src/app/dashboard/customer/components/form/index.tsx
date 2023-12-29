"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm, FormData } from "./schema";
import { Input, Loading } from "@/components";
import { api } from "@/lib/api";
import { useDashboardContext } from "@/context/dashboard";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function NewCustomerForm() {
  const router = useRouter();
  const { userId } = useDashboardContext();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schemaForm) });

  const handleRegisterSubmit = async (values: FormData) => {
    try {
      setLoading(true);
      const { address, email, name, phone } = values;
      await api.post("/api/customer", {
        name,
        email,
        phone,
        address: address ?? "",
        userId,
      });
      router.forward()
      router.push("/dashboard/customer");
    } catch (error) {
      alert("deu ruimm...");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <form
      className="flex flex-col mt-6 gap-4"
      onSubmit={handleSubmit(handleRegisterSubmit)}
    >
      <label className="text-lg font-medium">Nome </label>
      <Input
        placeholder="Digite o nome do cliente"
        type="text"
        name="name"
        error={errors.name?.message}
        register={register}
      />
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex-1">
          <label className="text-lg font-medium">Telefone </label>
          <Input
            placeholder="telefone ex: (DD) 99999999"
            type="number"
            name="phone"
            error={errors.phone?.message}
            register={register}
          />
        </div>
        <div className="flex-1">
          <label className="text-lg font-medium">Email </label>
          <Input
            placeholder="email"
            type="email"
            name="email"
            error={errors.email?.message}
            register={register}
          />
        </div>
      </div>

      <div className="flex-1">
        <label className="text-lg font-medium">Endereço</label>
        <Input
          placeholder="Rua: A nº1  bairro/cidade"
          type="text"
          name="address"
          error={errors.email?.message}
          register={register}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 p-2 text-white rounded font-medium uppercase"
      >
        salvar
      </button>
    </form>
  );
}
