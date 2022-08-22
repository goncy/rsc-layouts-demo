import type {FC} from "react";

import Navbar from "../components/Navbar.client";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({children}) => {
  return (
    <html lang="es">
      <head>
        <title>La web de Goncy</title>
      </head>
      <body>
        <h1>La web de Goncy</h1>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
