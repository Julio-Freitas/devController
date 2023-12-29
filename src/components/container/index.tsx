export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-2 sm:px-4">{children}</div>
  );
}
