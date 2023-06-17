export function priceCalculater(cart) {
  if (cart.length > 0) {
    let totalval = cart.reduce(
      (acc, val) => {
        acc = {
          ...acc,
          total: acc.total + val.qty * val.price,
        };
        return acc;
      },
      { total: 0, totalprice: 0 }
    );
    return { ...totalval, totalprice: totalval.total + 0.1 * totalval.total };
  }
}
