import { useCart } from "../dataProvider/CartProvider";

export function SearchBar() {
  let { setSearchValue } = useCart();
  // let itemsName = [];
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className="search-box"
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      <button type="submit" className="secondary-btn">
        Search
      </button>
    </>
  );
}
