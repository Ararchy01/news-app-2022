import { Article } from "./Article";
import { Weather } from "./Weather";

export type MainProps = {
  articles: Article[];
  weather: Weather;
  category: string;
};
