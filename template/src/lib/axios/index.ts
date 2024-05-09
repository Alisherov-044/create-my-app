import axios from "axios";
import { baseURL } from "@/constants/urls";

export const Axios = axios.create({ baseURL });
