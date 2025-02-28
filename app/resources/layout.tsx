import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "Resource List",
  description: "Generated for admin description",
};

const ResourcesLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ResourcesLayout;
