import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useRouter } from "next/router";

export default function SearchBar({ q }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder={q ? q : "Search the countries..."}
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
