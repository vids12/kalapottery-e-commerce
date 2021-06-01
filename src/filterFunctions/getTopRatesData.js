export function getTopRatesData(productList) {
    return productList.filter((obj) =>
      obj.offer === "Top Rates" ? obj : !obj
    );
}