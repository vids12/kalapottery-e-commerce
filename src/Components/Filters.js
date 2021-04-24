import { useCart } from "../dataProvider/CartProvider";

export function Filters(){
    const { dispatch:filterDispatch, fastDelivery, showInventory,sortBy } = useCart();
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