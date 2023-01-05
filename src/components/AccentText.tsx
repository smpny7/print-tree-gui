import { FC, ReactNode } from "react";

type AccentTextProps = {
  children: ReactNode;
};

const AccentText: FC<AccentTextProps> = ({ children }) => (
  <span className="border-b border-dashed border-error">{children}</span>
);

export default AccentText;
