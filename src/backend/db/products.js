import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "iPhone X",
    category: "mobiles",
    rating: 4.5,
    image: "./img/phone3.jpg",
    altText: "iPhone X",
    description:
      "The iPhone X features a stunning OLED display, Face ID technology, and a powerful A11 Bionic chip.",
    price: 999.99,
  },
  {
    _id: uuid(),
    rating: 4.6,

    name: "Samsung Galaxy S21",
    category: "mobiles",
    image: "./img/phone1.jpg",
    altText: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 comes with a 6.2-inch Dynamic AMOLED display, a versatile camera system, and 5G connectivity.",
    price: 899.99,
  },
  {
    _id: uuid(),
    name: "Google Pixel 6",
    rating: 4.3,

    category: "mobiles",
    image: "./img/phone1.jpg",
    altText: "Google Pixel 6",
    description:
      "The Google Pixel 6 offers an exceptional camera experience, a smooth 120Hz display, and the latest Android features.",
    price: 799.99,
  },
  {
    _id: uuid(),
    rating: 4,

    name: "OnePlus 9 Pro",
    category: "mobiles",
    image: "./img/phone4.png",
    altText: "OnePlus 9 Pro",
    description:
      "The OnePlus 9 Pro boasts a 6.7-inch Fluid AMOLED display, a Hasselblad partnership for improved camera capabilities, and fast charging.",
    price: 899.99,
  },
  {
    _id: uuid(),
    rating: 5,

    name: "Xiaomi Mi 11",
    category: "mobiles",
    image: "./img/phone5.jpg",
    altText: "Xiaomi Mi 11",
    description:
      "The Xiaomi Mi 11 features a 6.81-inch AMOLED display, a powerful Snapdragon 888 processor, and a high-resolution camera system.",
    price: 699.99,
  },
  {
    _id: uuid(),
    name: "iPhone X",
    category: "mobiles",
    rating: 1,
    image: "./img/phone3.jpg",
    altText: "iPhone X",
    description:
      "The iPhone X features a stunning OLED display, Face ID technology, and a powerful A11 Bionic chip.",
    price: 999.99,
  },
  {
    _id: uuid(),
    name: "Dell XPS 15",
    rating: 4.2,

    image: "./img/laptop.webp",
    category: "Laptop",
    description:
      "Powerful 15-inch laptop with high-resolution display and excellent performance.",
    price: 1899,
    alttext: "Dell XPS 15 laptop",
  },
  {
    _id: uuid(),
    rating: 3.8,

    name: "MacBook Pro",
    image: "./img/laptop2.jpg",
    category: "Laptop",
    description:
      "Sleek and powerful laptop designed for creative professionals.",
    price: 2199,
    alttext: "MacBook Pro laptop",
  },
  {
    _id: uuid(),
    rating: 4.8,

    name: "HP Spectre x360",
    image: "./img/laptop4.jpg",
    category: "Laptop",
    description:
      "Versatile 2-in-1 laptop with a flexible hinge and impressive performance.",
    price: 1499,
    alttext: "HP Spectre x360 laptop",
  },
  {
    _id: uuid(),
    rating: 4,

    name: "Asus ROG Zephyrus G14",
    image: "./img/laptop.webp",
    category: "Laptop",
    description:
      "Powerful gaming laptop with a compact design and high-refresh-rate display.",
    price: 1799,
    alttext: "Asus ROG Zephyrus G14 laptop",
  },
  {
    _id: uuid(),
    rating: 5,

    name: "Lenovo ThinkPad X1 Carbon",
    image: "./img/laptop4.jpg",
    category: "Laptop",
    description:
      "Premium business laptop with a durable build and impressive battery life.",
    price: 1399,
    alttext: "Lenovo ThinkPad X1 Carbon laptop",
  },
  {
    _id: uuid(),
    name: "iPhone X",
    category: "mobiles",
    rating: 4.5,
    image: "./img/phone3.jpg",
    altText: "iPhone X",
    description:
      "The iPhone X features a stunning OLED display, Face ID technology, and a powerful A11 Bionic chip.",
    price: 999.99,
  },
  {
    _id: uuid(),
    rating: 4.6,

    name: "Samsung Galaxy S21",
    category: "mobiles",
    image: "./img/phone1.jpg",
    altText: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 comes with a 6.2-inch Dynamic AMOLED display, a versatile camera system, and 5G connectivity.",
    price: 899.99,
  },
  {
    _id: uuid(),
    rating: 4.9,

    name: "Samsung QLED 4K TV",
    image: "./img/tv.jpg",
    category: "TV",
    description:
      "Experience stunning visuals with the Samsung QLED 4K TV. It features a sleek design, vibrant colors, and a powerful processor for smooth performance.",
    price: 999.99,
    altText: "Samsung QLED 4K TV",
  },
  {
    _id: uuid(),
    rating: 3.8,

    name: "MacBook Pro",
    image: "./img/laptop2.jpg",
    category: "Laptop",
    description:
      "Sleek and powerful laptop designed for creative professionals.",
    price: 2199,
    alttext: "MacBook Pro laptop",
  },
  {
    _id: uuid(),
    rating: 4.2,

    name: "LG OLED TV",
    image: "./img/tv1.jpg",
    category: "TV",
    description:
      "Enjoy true black levels and vibrant colors with the LG OLED TV. Its advanced display technology provides an immersive viewing experience.",
    price: 1499.99,
    altText: "LG OLED TV",
  },
  {
    _id: uuid(),
    rating: 5,

    name: "Lenovo ThinkPad X1 Carbon",
    image: "./img/laptop4.jpg",
    category: "Laptop",
    description:
      "Premium business laptop with a durable build and impressive battery life.",
    price: 1399,
    alttext: "Lenovo ThinkPad X1 Carbon laptop",
  },
  {
    _id: uuid(),
    rating: 4.3,

    name: "Sony Bravia LED TV",
    image: "./img/tv2.jpg",
    category: "TV",
    description:
      "The Sony Bravia LED TV offers excellent picture quality and smart features. It delivers sharp images and supports a wide range of streaming apps.",
    price: 799.99,
    altText: "Sony Bravia LED TV",
  },
  {
    _id: uuid(),
    rating: 4,

    name: "Vizio 4K UHD",
    image: "./img/tv3.jpg",
    category: "TV",
    description:
      "Get access to a world of entertainment with the TCL Roku TV. It combines a sleek design with an intuitive interface and supports popular streaming services.",
    price: 599.99,
    altText: "TV",
  },
  {
    _id: uuid(),
    rating: 5,

    name: "Vizio 4K UHD TV",
    image: "./img/tv.jpg",
    category: "TV",
    description:
      "Experience lifelike visuals with the Vizio 4K UHD TV. It offers stunning clarity, rich colors, and supports popular streaming platforms.",
    price: 899.99,
    altText: "Vizio 4K UHD TV",
  },
  {
    _id: uuid(),
    rating: 4.2,

    name: "LG OLED TV",
    image: "./img/tv1.jpg",
    category: "TV",
    description:
      "Enjoy true black levels and vibrant colors with the LG OLED TV. Its advanced display technology provides an immersive viewing experience.",
    price: 1499.99,
    altText: "LG OLED TV",
  },
  {
    _id: uuid(),
    rating: 5,

    name: "Lenovo ThinkPad X1 Carbon",
    image: "./img/laptop4.jpg",
    category: "Laptop",
    description:
      "Premium business laptop with a durable build and impressive battery life.",
    price: 1399,
    alttext: "Lenovo ThinkPad X1 Carbon laptop",
  },
  {
    _id: uuid(),
    rating: 4.3,

    name: "Sony Bravia LED TV",
    image: "./img/tv2.jpg",
    category: "TV",
    description:
      "The Sony Bravia LED TV offers excellent picture quality and smart features. It delivers sharp images and supports a wide range of streaming apps.",
    price: 799.99,
    altText: "Sony Bravia LED TV",
  },
  {
    _id: uuid(),
    rating: 4,

    name: "Vizio 4K UHD",
    image: "./img/tv3.jpg",
    category: "TV",
    description:
      "Get access to a world of entertainment with the TCL Roku TV. It combines a sleek design with an intuitive interface and supports popular streaming services.",
    price: 599.99,
    altText: "TV",
  },
];
