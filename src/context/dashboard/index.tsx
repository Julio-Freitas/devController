"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useMemo } from "react";

type useContextProps = {
  email?: string;
  userId: string;
  image?: string;
  name?: string;
};

export const ContextDashboard = createContext<useContextProps | null>(null);

export const DashboardProvider = ({ children }: React.PropsWithChildren) => {
  const { data } = useSession();

  const valueData = useMemo(() => {
    return {
      email: data?.user.email ?? "",
      userId: data?.user.id ?? "",
      image: data?.user.image ?? "",
      name: data?.user.name ?? "",
    };
  }, [data?.user]);
  return (
    <ContextDashboard.Provider value={valueData}>
      {children}
    </ContextDashboard.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(ContextDashboard);
  if (!context)
    throw new Error(
      "useDashboardContext only can be used inset <DashboardProvider>"
    );
  return context;
};
