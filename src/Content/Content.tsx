import type { ReactNode } from "react";

type ContentType = {
  children: ReactNode;
};

export default function Content({ children }: ContentType) {
  return (
    <div className="grow px-12 py-4 w-full md:max-w-[85%] flex-1">
      {children}
    </div>
  );
}
