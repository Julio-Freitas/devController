import { WithAuthenticate } from "@/components/withAuthenticate";
import { DashboardHeader } from "./components/header";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <WithAuthenticate>
      <DashboardHeader />
      {children}
    </WithAuthenticate>
  );
}
