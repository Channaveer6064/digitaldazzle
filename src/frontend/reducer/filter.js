export default function FilterReducer(state, action) {
  switch (action.type) {
    case "sort":
      return { ...state, sortBy: action.payload };

    case "mobiles":
      return { ...state, showmobiles: !state.showmobiles };

    case "Laptop":
      return { ...state, showlaptops: !state.showlaptops };

    case "TV":
      return { ...state, showtelevision: !state.showtelevision };

    case "rating":
      return { ...state, rating: action.payload };
    case "clear":
      return {
        sortBy: "",
        showmobiles: false,
        showtelevision: false,
        showlaptops: false,
        rating: NaN,
      };
    default:
      return state;
  }
}

function getSortedData(product, sortBy) {
  if (sortBy && sortBy === "Price_High_To_Low") {
    return product.sort((a, b) => b.price - a.price);
  } else if (sortBy && sortBy === "Price_Low_To_High") {
    return product.sort((a, b) => a.price - b.price);
  } else return product;
}

function getratingdata(product, rating) {
  return product.filter((items) => items.rating >= rating);
}

export function filtereddata(
  productList,
  { sortBy, showmobiles, showlaptops, showtelevision, rating }
) {
  let filterprod = [];
  let arr = [];
  var bool = false;
  if (showmobiles) {
    arr = productList.filter((items) => items.category === "mobiles");
    filterprod.push(...arr);
    bool = true;
  }

  if (showtelevision) {
    arr = productList.filter((items) => items.category === "TV");
    filterprod.push(...arr);
    bool = true;
  }

  if (showlaptops) {
    arr = productList.filter((items) => items.category === "Laptop");
    filterprod.push(...arr);
    bool = true;
  }

  if (bool) {
    filterprod = getSortedData(filterprod, sortBy);
    if (rating) {
      return getratingdata(filterprod, rating);
    } else return filterprod;
  } else {
    productList = getSortedData(productList, sortBy);
    if (rating) {
      return getratingdata(productList, rating);
    } else return productList;
  }
}
