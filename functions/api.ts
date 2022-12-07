import { Article } from "../types";

const headers = new Headers();
headers.append("napkin-account-api-key", process.env.API_KEY!);
export const getNews = async (category: string) => {
  const newsData = await fetch(`https://ararchy0621.npkn.net/news${category}`, {
    headers: headers,
  });
  const newsJson = await newsData.json();
  return newsJson?.articles;
};

export const getWeather = async () => {
  const weatherData = await fetch("https://ararchy0621.npkn.net/weather", {
    headers: headers,
  });
  const weather = await weatherData.json();
  return weather;
};
