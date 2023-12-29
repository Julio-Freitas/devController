"use client";

import { TicketProps } from "@/app/dashboard/components/ticket/types";
import { customerProps } from "@/app/dashboard/customer/components/card/type";
import { ModalTicket } from "@/components";
import { createContext, useContext, useState } from "react";
interface ModalContextData {
  visible: boolean;
  handleModalVisible: () => {};
  ticket: TicketInfo | null;
  handleSetTicket: (datails: TicketInfo) => void;
}

interface TicketInfo {
  ticket: TicketProps;
  customer: customerProps | null;
}
export const ModalContext = createContext<ModalContextData | object>({});

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<TicketInfo>();
  const handleModalVisible = () => setVisible(!visible);
  const handleSetTicket = (datail: TicketInfo) => setTicket(datail);

  return (
    <ModalContext.Provider
      value={{ visible, handleModalVisible, ticket, handleSetTicket }}
    >
      {visible && <ModalTicket />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModalProvider = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error(
      "useModalProvider can only be used wrapped by a <ModalProvider />"
    );
  return context as ModalContextData;
};
