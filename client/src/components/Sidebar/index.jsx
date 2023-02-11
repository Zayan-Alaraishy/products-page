import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Arrow from "../../assets/arrowB.png";
import Cart from "../../assets/blueCart.png";
import {
  fetchAllProducts,
  fetchCategoryProducts,
} from "../../redux/actions/productActions";

const Categories = {
  all: { title: "", name: "", icon: "All", color: "" },
  smartphones: {
    title: "Smartphones",
    name: "smartphones",
    icon: "📱",
  },
  laptops: { title: "Laptops", name: "laptops", icon: "💻" },
  skincare: {
    title: "Skincare",
    name: "skincare",
    icon: "💆🏼",
  },
  sunglasses: {
    title: "Sunglasses",
    name: "sunglasses",
    icon: "🕶️",
  },
  womens_bags: {
    title: "Bags",
    name: "womens-bags",
    icon: "👜",
  },
  womens_shoes: {
    title: "Shoes",
    name: "womens-shoes",
    icon: "👠",
  },
  womens_dresses: {
    title: "Dresses",
    name: "womens-dresses",
    icon: "👗",
  },
  mens_shirts: {
    title: "Shirts",
    name: "mens-shirts",
    icon: "👕",
  },
  womens_watches: {
    title: "Watches",
    name: "womens-watches",
    icon: "⌚",
  },
  womens_jewellery: {
    title: "Jewellery",
    name: "womens-jewellery",
    icon: "💍",
  },
};

export default function Sidebar() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.ProductReducers);

  const [open, setOpen] = useState(window.innerWidth > 600);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory === "") {
      dispatch(fetchAllProducts());
    } else {
      dispatch(fetchCategoryProducts(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div
      className={` ${
        open ? "w-96" : "w-20 "
      } bg-light-gray h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src={Arrow}
        className={`absolute cursor-pointer -right-3 top-9 w-7 
          rounded-full ${open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="arrow"
      />
      <div className="flex gap-x-3 items-center">
        <img
          src={Cart}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt="logo"
        />
        <h1
          className={`origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Let's Shop
        </h1>
      </div>
      <ul className="pt-6">
        {Object.values(Categories).map(({ name, icon, title }, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-white text-sm items-center gap-x-4 mb-1
              ${name === category && "bg-white"} `}
            onClick={() => setSelectedCategory(name)}
          >
            <span className="text-xl ">{icon}</span>
            <span className={`${!open && "hidden"} origin-left duration-200 `}>
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
