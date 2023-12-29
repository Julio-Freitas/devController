"use client";
import { FiFile, FiEye, FiEyeOff, FiCheckSquare } from "react-icons/fi";
import { ComponentTicketProps, TicketProps } from "./types";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useModalProvider } from "@/context/modal";

export function TicketItem({ ticket, customer }: ComponentTicketProps) {
  const [loading, setLoading] = useState(false);
  const { handleModalVisible, handleSetTicket } = useModalProvider();
  const router = useRouter();
  const onDeleteTicket = async () => {
    try {
      setLoading(true);
      await api.patch("/api/ticket", {
        id: ticket.id,
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleModal = () => {
    handleModalVisible();

    if (customer) handleSetTicket({ customer, ticket });
  };
  return (
    <tr
      className="dark:bg-gray-800 dark:border-gray-700 border-b-2  border-b-slate-200 h-16 last:border-b-0  hover:bg-black duration-300 data-[loading=true]:pointer-events-none data-[loading=true]:bg-slate-500 data-[loading=true]:opacity-30 data-[loading=true]:animate-pulse"
      data-loading={loading}
    >
      <td className="text-left py-2 text-gray-300 pl-2">{ticket.name}</td>
      <td className="text-left py-2 hidden sm:table-cell text-gray-300 pl-2">
        {ticket.created_at?.toLocaleDateString("pt-br")}
      </td>
      <td className="text-left py-2 text-gray-300 pl-2">
        {ticket.status === "OPEN" ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Aberto
          </span>
        ) : (
          <span className="bg-red-900 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Fechado
          </span>
        )}
      </td>
      <td className="text-left py-2 text-gray-300 pl-2">
        <button type="button" onClick={onDeleteTicket}>
          <FiCheckSquare
            size={24}
            color="#fff"
            className="hover:opacity-30 duration-300"
          />
        </button>

        <button className="ml-2" type="button" onClick={handleModal}>
          <FiEye
            size={24}
            color="#fff"
            className="hover:opacity-30 duration-300"
          />
        </button>
      </td>
    </tr>
  );
}
