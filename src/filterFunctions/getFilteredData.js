export function getFilterData(productList, showInventory,fastDelivery) {
    return productList
      .filter(item =>
      showInventory ? item : item.inStock
      )
      .filter((item) => (fastDelivery ? item.fastDelivery : item));
}