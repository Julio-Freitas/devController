import { getServerSession } from "next-auth";
import { Container } from "..";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { DashboardProvider } from "@/context/dashboard";

export const WithAuthenticate  = async ({ children }: React.PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  const isLoged = !session || !session.user;
  if (isLoged) return redirect("/");

  return (
    <DashboardProvider>
      <Container>{children}</Container>
    </DashboardProvider>
  );
};
