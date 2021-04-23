export function getSortedArr(productList, sortBy) {
    if (sortBy === "PRICE_HIGH_TO_LOW")
      return productList.sort((a, b) => b.price - a.price);
    else if (sortBy === "PRICE_LOW_TO_HIGH")
      return productList.sort((a, b) => a.price - b.price);
    else return productList;
}