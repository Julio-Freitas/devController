"use client";

import { phoneMask } from "@/app/utils/phonemask";
import { useModalProvider } from "@/context/modal";
import { MouseEventHandler, useRef } from "react";
import { FiXCircle } from "react-icons/fi";

export function ModalTicket() {
  const { handleModalVisible, ticket } = useModalProvider();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideModal = (target: Node) => {
    if (modalRef.current && !modalRef.current.contains(target))
      handleModalVisible();
  };

  return (
    <section
      onClick={(e) => handleClickOutsideModal(e.target as Node)}
      tabIndex={-1}
      aria-hidden="true"
      className="absolute bg-gray-800/80 w-full min-h-screen "
    >
      <div className="absolute inset-0 shadow-2xl flex items-center justify-center text-base leading-relaxed text-gray-500 text-gray-400">
        <div
          ref={modalRef}
          className=" shadow-2xl w-4/5 md:w-1/2 max-w-2xl p-3 rounded-md bg-gray-700"
        >
          <div className="flex items-center justify-between mb-4 ">
            <h1 className="font-bold text-lg md:text-2xl text-white">
              Detalhes do Chamado
            </h1>
            <button
              type="button"
              className="py-1 px-2  text-white"
              onClick={handleModalVisible}
            >
              <FiXCircle size={24} color="#fff" />
            </button>
          </div>

          <div className="flex flex-wrap-gap-1 mb-2 text-base leading-relaxed text-gray-400">
            <h2 className="font-bold text-white">Nome:</h2>
            <p className="pl-2">{ticket?.ticket.name}</p>
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <h2 className="font-bold text-white">Descrição:</h2>
            <p>{ticket?.ticket.description}</p>
          </div>
          <div className="border-2 border-s-cyan-200 my-3"></div>

          <div className="flex flex-col gap-1 mb-2">
            <h2 className="font-bold text-white">Detalhes do cliente</h2>
            <div className="flex gap-2">
              <h3 className="font-bold">Nome:</h3>
              <p>{ticket?.customer?.name}</p>
            </div>
            <div className="flex gap-2">
              <h3 className="font-bold text-white">Telefone:</h3>
              <p>{phoneMask(ticket?.customer?.phone as string)}</p>
            </div>
            <div className="flex gap-2">
              <h3 className="font-bold text-white">Email:</h3>
              <p>{ticket?.customer?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
