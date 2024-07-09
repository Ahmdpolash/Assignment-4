import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};


const Container = ({ children }: TContainer) => {
  return <div className="px-4 lg:px-16 py-2">{children}</div>;
};

export default Container;
