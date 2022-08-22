import {FC} from "react";

type Props = {
  children: JSX.Element;
};

const SupermarketLayout: FC<Props> = ({children}) => {
  return (
    <div>
      <h1>Supermarket layout</h1>
      {children}
    </div>
  );
};

export default SupermarketLayout;
