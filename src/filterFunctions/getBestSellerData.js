export function getBestSellerData(productList) {
    return productList.filter((obj) =>
      obj.offer === "Best Sellers" ? obj : !obj
    );
}