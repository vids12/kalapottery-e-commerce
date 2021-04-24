export function getSearchData(productList, searchValue) {
    return productList.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ? item : !item
    );
  }