import axios from "axios";
import { baseURL } from "@/utils/urls";

export const Axios = axios.create({ baseURL });
