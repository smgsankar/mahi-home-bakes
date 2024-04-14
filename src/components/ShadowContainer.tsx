import { PropsWithChildren } from "react";

export const ShadowContainer = ({ children }: PropsWithChildren) => (
  <div className="shadow-container">{children}</div>
);
