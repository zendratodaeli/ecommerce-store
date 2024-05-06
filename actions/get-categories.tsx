import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//   const res = await axios.get(URL)
//   return res.data;
// }

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL)
  return res.json();
}

export default getCategories;
