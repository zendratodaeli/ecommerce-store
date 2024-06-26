import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await axios.get(`${URL}/${id}`)
  return res.data;
}

// const getBillboard = async (id: String): Promise<Billboard> => {
//   const res = await fetch(`${URL}/${id}`)
//   return res.json();
// }

export default getBillboard;