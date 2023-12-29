import { Container } from "@/components";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { NewCustomerForm } from "../components/form";


export default  function NewCustomer() {
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/customer"
            className="bg-black text-white py-2 px-6 rounded-lg flex items-center justify-between hover:scale-105 duration-500"
          >
            <FiArrowLeft />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo Cliente</h1>
        </div>
        <NewCustomerForm />
      </main>
    </Container>
  );
}
