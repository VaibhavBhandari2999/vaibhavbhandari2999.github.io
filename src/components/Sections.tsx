import { ReactNode } from "react";

export function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-10 ${className}`}>
      <div className="mb-3 flex items-center gap-3">
        <div className="h-1 w-10 rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
