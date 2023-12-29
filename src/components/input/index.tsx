'use client'
import { InputProps } from "./type";

export function Input({
  name,
  placeholder,
  register,
  type,
  error,
  rules,
}: InputProps) {
  return (
    <>
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {error && <p className="mt-1 text-red-300 border-red-100">{error}</p>}
    </>
  );
}
