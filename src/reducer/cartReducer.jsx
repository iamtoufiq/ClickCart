const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
      // tackle the existing product

      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
            // this will not allow to select more than the stock value.
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock, // this is for isstock  , how many is there in stock
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case "SET_DECREMENT":
      let updatedProduct = state.cart.map((curElem) =>
        curElem.id === action.payload
          ? { ...curElem, amount: Math.max(curElem.amount - 1, 1) }
          : curElem
      );
      return { ...state, cart: updatedProduct };

    case "SET_INCREMENT":
      let updatedProducts = state.cart.map((curElem) =>
        curElem.id === action.payload
          ? { ...curElem, amount: Math.min(curElem.amount + 1, curElem.max) }
          : curElem
      );
      return { ...state, cart: updatedProducts };

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    // to empty or to clear to cart
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "CART_ITEM_PRICE_TOTAL":
      let total = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;
          accum.total_item += amount;
          accum.total_price += price * amount;
          return accum;
        },
        { total_item: 0, total_price: 0 }
      );
      return { ...state, ...total };
    default:
      return state;
  }
};
// -----------------------------------------
// if (action.type === "ADD_TO_CART") {
//   let { id, color, amount, product } = action.payload;

//   // tackle the existing product

//   let existingProduct = state.cart.find(
//     (curItem) => curItem.id === id + color
//   );

//   if (existingProduct) {
//     let updatedProduct = state.cart.map((curElem) => {
//       if (curElem.id === id + color) {
//         let newAmount = curElem.amount + amount;
//         // this will not allow to select more than the stock value.
//         if (newAmount >= curElem.max) {
//           newAmount = curElem.max;
//         }
//         return {
//           ...curElem,
//           amount: newAmount,
//         };
//       } else {
//         return curElem;
//       }
//     });
//     return {
//       ...state,
//       cart: updatedProduct,
//     };
//   } else {
//     let cartProduct = {
//       id: id + color,
//       name: product.name,
//       color,
//       amount,
//       image: product.image[0].url,
//       price: product.price,
//       max: product.stock, // this is for isstock  , how many is there in stock
//     };

//     return {
//       ...state,
//       cart: [...state.cart, cartProduct],
//     };
//   }
// }

// if (action.type === "SET_DECREMENT") {
//   let updatedProduct = state.cart.map((curElem) =>
//     curElem.id === action.payload
//       ? { ...curElem, amount: Math.max(curElem.amount - 1, 1) }
//       : curElem
//   );
//   return { ...state, cart: updatedProduct };
// }

// if (action.type === "SET_INCREMENT") {
//   let updatedProduct = state.cart.map((curElem) =>
//     curElem.id === action.payload
//       ? { ...curElem, amount: Math.min(curElem.amount + 1, curElem.max) }
//       : curElem
//   );
//   return { ...state, cart: updatedProduct };
// }

// if (action.type === "REMOVE_ITEM") {
//   let updatedCart = state.cart.filter(
//     (curItem) => curItem.id !== action.payload
//   );
//   return {
//     ...state,
//     cart: updatedCart,
//   };
// }
// to empty or to clear to cart

// if (action.type === "CLEAR_CART") return { ...state, cart: [] };

// get the total value of the cart and price

// if (action.type === "CART_ITEM_PRICE_TOTAL") {
//   let total = state.cart.reduce(
//     (accum, curElem) => {
//       let { price, amount } = curElem;
//       accum.total_item += amount;
//       accum.total_price += price * amount;
//       return accum;
//     },
//     { total_item: 0, total_price: 0 }
//   );
//   return { ...state, ...total };
// }

// return state;

export default cartReducer;
