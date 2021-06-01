export function getSortedArr(productList, sortBy) {
    if (sortBy === "PRICE_HIGH_TO_LOW")
      return productList.sort((a, b) => b.price - a.price);
    else if (sortBy === "PRICE_LOW_TO_HIGH")
      return productList.sort((a, b) => a.price - b.price);
    else if(sortBy === "ALPHABETICALLY")
      return productList.sort((a,b)=>{ 
        if(a.name.toUpperCase() < b.name.toUpperCase())
          return -1;
        if(a.name.toUpperCase() > b.name.toUpperCase())
          return 1;
        else 
          return 0;
      });
    if(sortBy === "4_&_UP")
      return productList.map(obj => (obj.ratings > 4 || obj.ratings === 4) ? obj : !obj);
    else if(sortBy === "3_&_UP")
      return productList.map(obj => (obj.ratings > 3 || obj.ratings === 3) ? obj : !obj);
    else if(sortBy === "2_&_UP")
      return productList.map(obj => (obj.ratings > 2 || obj.ratings === 2) ? obj : !obj);
    else if(sortBy === "1_&_UP")
      return productList.map(obj => (obj.ratings > 1 || obj.ratings === 1) ? obj : !obj);
  return productList;
}