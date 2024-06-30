import { useState } from 'react';
import './styles.css';

type Props = {
  onSearch: Function;
}
export default function SearchBar({ onSearch }: Props) {

  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input type="text" value={text} placeholder="Nome do produto" onChange={handleChange} />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
}