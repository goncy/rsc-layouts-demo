import type {FC} from "react";

type Props = {
  children: JSX.Element;
};

const JokesLayout: FC<Props> = ({children}) => {
  return (
    <div>
      <h1>Jokes layout</h1>
      {children}
    </div>
  );
};

export default JokesLayout;
