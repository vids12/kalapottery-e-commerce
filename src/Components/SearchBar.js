import { useCart } from "../dataProvider/CartProvider";
export function SearchBar(){
    const { setSearchValue,setShowSearchPage } = useCart();
    return <div className="search-page">
        <div class="search-div">
            <h3 class="search-title">Start typing</h3>
        </div>
        <input type="search" placeholder="Search" className="search-box" onChange={(e)=>setSearchValue(e.target.value)}></input>
        <div>
            <button className="search-close-btn close-btn" onClick={()=>setShowSearchPage(false)}>X</button>
        </div>
    </div>
}
