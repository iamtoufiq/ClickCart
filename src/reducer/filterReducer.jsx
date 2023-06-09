const filterReducer = (state, action) => {
  switch (action.type) {
    // case "LOAD_FILTER_PRODUCTS":
    //   let priceArr = action.payload,
    //     maxPrice = Math.max(...priceArr.map((currElem) => currElem.price)),
    //     minPrice = Math.min(...priceArr.map((currElem) => currElem.price));
    //   return {
    //     ...state,
    //     filter_products: [...priceArr],
    //     all_products: [...priceArr],
    //     filters: {
    //       ...state.filters,
    //       maxPrice: maxPrice,
    //       price: maxPrice,
    //       minPrice: minPrice,
    //     },
    //   };
    case "LOAD_FILTER_PRODUCTS":
      const priceArr = action.payload;
      const maxPrice = Math.max(...priceArr.map((currElem) => currElem.price));
      const minPrice = Math.min(...priceArr.map((currElem) => currElem.price));
      return {
        ...state,
        filter_products: [...priceArr],
        all_products: [...priceArr],
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
          minPrice,
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    // ----------------------------------------
    // case "SORTING_PRODUCTS":
    //   let newSortData;

    //   const { filter_products, sorting_value } = state;
    //   let tempSortProduct = [...filter_products];

    //   const sortingProducts = (a, b) => {
    //     if (sorting_value === "lowest") {
    //       return a.price - b.price;
    //     }

    //     if (sorting_value === "highest") {
    //       return b.price - a.price;
    //     }

    //     if (sorting_value === "a-z") {
    //       return a.name.localeCompare(b.name);
    //     }

    //     if (sorting_value === "z-a") {
    //       return b.name.localeCompare(a.name);
    //     }
    //   };

    //   newSortData = tempSortProduct.sort(sortingProducts);

    //   return {
    //     ...state,
    //     filter_products: newSortData,
    //   };
    case "SORTING_PRODUCTS":
      let newSortData,
        a,
        tempSortProduct = [...state.filter_products];
      return (
        (newSortData =
          "lowest" === state.sorting_value
            ? tempSortProduct.sort(
                (newSortData, a) => newSortData.price - a.price
              )
            : "highest" === state.sorting_value
            ? tempSortProduct.sort(
                (newSortData, a) => a.price - newSortData.price
              )
            : "a-z" === state.sorting_value
            ? tempSortProduct.sort((newSortData, a) =>
                newSortData.name.localeCompare(a.name)
              )
            : "z-a" === state.sorting_value
            ? tempSortProduct.sort((newSortData, a) =>
                a.name.localeCompare(newSortData.name)
              )
            : void 0),
        (a = { ...state, filter_products: newSortData }),
        a
      );

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: name === "text" ? value.toLowerCase() : value,
        },
      };

    // case "FILTER_PRODUCTS":
    //   let { all_products } = state;
    //   let tempFilterProduct = [...all_products];

    //   const { text, category, company, color, price } = state.filters;

    //   if (text) {
    //     tempFilterProduct = tempFilterProduct.filter((curElem) => {
    //       return curElem.name.toLowerCase().includes(text);
    //     });
    //   }
    //   if (category !== "all") {
    //     tempFilterProduct = tempFilterProduct.filter(
    //       (curElem) => curElem.category === category
    //     );
    //   }
    //   if (company !== "all") {
    //     tempFilterProduct = tempFilterProduct.filter(
    //       (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
    //     );
    //   }
    //   if (color !== "all") {
    //     tempFilterProduct = tempFilterProduct.filter((curElem) =>
    //       curElem.colors.includes(color)
    //     );
    //   }
    //   if (price === 0) {
    //     tempFilterProduct = tempFilterProduct.filter(
    //       (curElem) => curElem.price === price
    //     );
    //   } else {
    //     tempFilterProduct = tempFilterProduct.filter(
    //       (curElem) => curElem.price <= price
    //     );
    //   }
    //   return {
    //     ...state,
    //     filter_products: tempFilterProduct,
    //   };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      tempFilterProduct = text
        ? tempFilterProduct.filter((curElem) =>
            curElem.name.toLowerCase().includes(text)
          )
        : tempFilterProduct;
      tempFilterProduct =
        category !== "all"
          ? tempFilterProduct.filter((curElem) => curElem.category === category)
          : tempFilterProduct;
      tempFilterProduct =
        company !== "all"
          ? tempFilterProduct.filter(
              (curElem) =>
                curElem.company.toLowerCase() === company.toLowerCase()
            )
          : tempFilterProduct;
      tempFilterProduct =
        color !== "all"
          ? tempFilterProduct.filter((curElem) =>
              curElem.colors.includes(color)
            )
          : tempFilterProduct;
      tempFilterProduct =
        price === 0
          ? tempFilterProduct.filter((curElem) => curElem.price === price)
          : tempFilterProduct.filter((curElem) => curElem.price <= price);

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice, // we have to fix this for the range button --> doubtHai --> done
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
