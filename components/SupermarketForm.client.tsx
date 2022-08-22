import {FC, useState} from "react";

type Item = {
  id: string;
  text: string;
};

const SupermarketForm: FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setItems(items.concat({id: String(+new Date()), text: e.currentTarget["text"].value}));

    e.currentTarget["text"].value = "";
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default SupermarketForm;
