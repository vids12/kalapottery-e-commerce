export function getNewArrivalData(productList) {
    return productList.filter((obj) =>
      obj.offer === "New Arrival" ? obj : !obj
    );
}