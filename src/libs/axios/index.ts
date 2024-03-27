import { env } from "@/libs/env/index.mjs";
import axios from "axios";

const BASE_URL = env.NEXT_PUBLIC_API_URL;
const APP_ID = env.NEXT_PUBLIC_APP_ID;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", "app-id": APP_ID },
});
