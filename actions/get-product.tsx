import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// const getProduct = async (id: string): Promise<Product> => {
//   const res = await axios.get(`${URL}/${id}`)
//   return res.data;
// }

const getProduct = async (id: string): Promise<Product[]> => {
  const res = await fetch(`${URL}/${id}`)
  return res.json();
}

export default getProduct;