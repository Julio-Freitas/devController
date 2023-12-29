import { CustomerType } from "../../types";

export type TicketProps = {
    id: string;
    name: string;
    description: string;
    status: string;
    created_at: Date | null;
    updated_at?: Date | null;
    customerId: string | null;
    userId: string | null;
};

export type ComponentTicketProps = { customer: CustomerType; ticket: TicketProps };
