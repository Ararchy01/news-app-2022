export const getNews = async (category: string) => {
  const newsData = await fetch(`https://ararchy0621.npkn.net/news${category}`, {
    headers: { "napkin-account-api-key": process.env.API_KEY },
  });
  const newsJson = await newsData.json();
  return newsJson?.articles;
};

export const getWeather = async () => {
  const weatherData = await fetch("https://ararchy0621.npkn.net/weather", {
    headers: { "napkin-account-api-key": process.env.API_KEY },
  });
  const weather = await weatherData.json();
  return weather;
};
