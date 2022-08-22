import {FC, useState} from "react";
import Link from "next/link";

const Navbar: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <nav style={{display: "flex", gap: 24}}>
      <Link soft href="/jokes">
        Jokes
      </Link>
      <Link soft href="/supermarket">
        Supermarket
      </Link>
      <span onClick={() => setCount((count) => count + 1)}>Count: {count}</span>
    </nav>
  );
};

export default Navbar;
