import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await axios.get(URL)
  return res.data;
}

// const getColors = async (): Promise<Color[]> => {
//   const res = await fetch(URL)
//   return res.json();
// }

export default getColors;
