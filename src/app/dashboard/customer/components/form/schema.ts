import { z } from "zod";
export const schemaForm = z.object({
  name: z.string().min(1, "Campo nome é obrigatório!"),
  email: z
    .string()
    .email("Digite um email válido")
    .min(1, "Campo email é obrigatório!"),
  phone: z.string().refine((value) => /^(?:\(\d{2}\)\s?)?\d{9}/.test(value), {
    message: "Número de telefone deve estar (DD) 999999999",
  }),
  address: z.string()
});

export type FormData = z.infer<typeof schemaForm>;
