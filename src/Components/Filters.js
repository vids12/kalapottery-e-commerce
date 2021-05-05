import { useCart } from "../dataProvider/CartProvider";

export function Filters(){
    const { dispatch:filterDispatch, fastDelivery, showInventory, sortBy } = useCart();
    return <>
        <fieldset>
        <legend>Sort By</legend>
        <label className="filter-label">
          <input
            type="radio"
            name="sort"
            onClick={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy==="PRICE_HIGH_TO_LOW"}
            className="filter-input"
          ></input>
          Price-high to low
        </label>
        <label className="filter-label">
          <input
            type="radio"
            name="sort"
            onClick={() =>
              filterDispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy==="PRICE_LOW_TO_HIGH"}
            className="filter-input"
          ></input>
          Price-low to high
        </label>
        <label className="filter-label">
          <input
            type="radio"
            name="sort"
            onClick={() =>
              filterDispatch({ type: "SORT", payload: "ALPHABETICALLY" })
            }
            checked={sortBy && sortBy==="ALPHABETICALLY"}
            className="filter-input"
          ></input>
          Alphabetically,A-Z
        </label>
        <div className="dropdown">
          <button className="dropdown-btn secondary-btn">Ratings</button>
          <div className="dropdown-content">
          <i class="fa fa-star fa-1" aria-hidden="true"></i>
            <p onClick={()=>filterDispatch({type: "SORT", payload: "4_&_UP"})}>4 &amp; Up </p>
            <p onClick={()=>filterDispatch({type: "SORT", payload: "3_&_UP"})}>3 &amp; Up</p>
            <p onClick={()=>filterDispatch({type: "SORT", payload: "2_&_UP"})}>2 &amp; Up</p>
            <p onClick={()=>filterDispatch({type: "SORT", payload: "1_&_UP"})}>1 &amp; Up</p>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Filter</legend>
        <label className="filter-label">
          <input
            type="checkbox"
            checked={showInventory}
            onClick={() => filterDispatch({ type: "TOGGLE_INVENTORY" })}
            className="filter-input"
          ></input>
          Include Out Of Stock
        </label>
        <label className="filter-label">
          <input
            type="checkbox"
            checked={fastDelivery}
            onClick={() => filterDispatch({ type: "FAST_DELIVERY" })}
            className="filter-input"
          ></input>
          Fast-Delivery
        </label>
        <button className="secondary-btn" onClick={()=>filterDispatch({ type: "CLEAR_FILTERS"})}>Clear All</button>
      </fieldset>
    </>
}