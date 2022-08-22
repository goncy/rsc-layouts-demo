import {FC} from "react";

import SupermarketForm from "../../components/SupermarketForm.client";

type Props = {
  date: string;
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 5000));

export async function getServerSideProps() {
  await sleep();

  return {
    props: {
      date: new Date().toISOString(),
    },
  };
}

const SupermarketPage: FC<Props> = ({date}) => {
  return (
    <section>
      <span>Updated on: {date}</span>
      <SupermarketForm />
    </section>
  );
};

export default SupermarketPage;
