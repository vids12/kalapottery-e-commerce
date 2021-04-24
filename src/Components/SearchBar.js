import { useCart } from "../dataProvider/CartProvider";
export function SearchBar(){
    const { setSearchValue } = useCart();
    return <input type="search" placeholder="Search" className="search-box" onChange={(e)=>setSearchValue(e.target.value)}></input>
}
