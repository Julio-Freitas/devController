"use client";
import { FiLoader, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { customerProps } from "./type";
import { phoneMask } from "@/app/utils/phonemask";
import { api } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";


export function CardCustomer({ name, email, phone, id }: customerProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const handleDeleteCustomer = async (id: string) => {
    try {
      setLoading(true);
      await api.delete(`/api/customer`, { params: { id } });
      router.refresh()
    } catch (error) {
      alert("Algo de errado Aconteceu!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="flex flex-col bg-gray-100 border-2 p-4 rounded-lg hover:scale-105 duration-300">
      <h2>
        <label className="font-bold  inline-flex items-center gap-2">
          <FiUser />
          Nome:
        </label>{" "}
        {name}
      </h2>
      <p>
        <label className="font-bold  inline-flex items-center gap-2">
          <FiMail /> Email:
        </label>{" "}
        {email}
      </p>
      <p>
        <label className="font-bold  inline-flex items-center gap-2">
          <FiPhone />
          Tel:
        </label>{" "}
        {phoneMask(phone)}
      </p>
      <button
        type="button"
        className="w-32 bg-red-400 px-4 py-1 justify-center rounded text-white mt-2 self-start flex items-center gap-2 cursor-pointer disabled:bg-gray-500 disabled:text-slate-400 disabled:pointer-events-none "
        onClick={() => handleDeleteCustomer(id)}
        disabled={loading}
      >
        <div className={loading ? "animate-spin" : "hidden"}>
          <FiLoader size={20} />
        </div>
        {loading ? "Espere..." : "Deletar"}
      </button>
    </article>
  );
}
