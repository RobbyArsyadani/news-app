import axios from "axios";
import type { Article } from "../types/article";

const API_KEY = "f79e08f96eed40afae30b37d24664cf9"; // ganti dengan API key kamu
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchTopHeadlines = async (): Promise<Article[]> => {
  const res = await axios.get(BASE_URL, {
    params: {
      country: "us",
      apiKey: API_KEY,
    },
  });
  return res.data.articles;
};

