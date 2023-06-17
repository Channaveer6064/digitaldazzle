import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "mobiles",
  },
  {
    _id: uuid(),
    categoryName: "laptops",
  },
  {
    _id: uuid(),
    categoryName: "TV",
  },
];
