import Image from "next/image";
import styles from "../weather/index.module.scss";
import Link from "next/link";
import Props from "../types";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Weather: React.FC<Props> = ({ weatherNews }) => {
  const currentWeatherMain = weatherNews.current.weather[0].main;
  const currentWeatherTemp = weatherNews.current.temp;
  const currentWeatherIcon =
    weatherNews.current.weather[0].icon.slice(0, 2) + "d";
  const today = new Date();
  return (
    <>
      <section className={styles.weather__mod}>
        <div className={styles.weather__heading__mod}>
          <h1>Weather</h1>
        </div>
        <section className={styles.weather}>
          <h1>Tokyo</h1>
          <div className={styles.weather__main}>
            <div className={styles.weather__top}>
              <div className={styles.weather__heading}>
                <a>{today.toDateString()}</a>
                <p>
                  {currentWeatherTemp.toString().slice(0, 4)}
                  <span>˚c</span>
                </p>
                <a>{currentWeatherMain}</a>
              </div>
              <Image
                className={styles.weather__icon}
                src={`/weather/${currentWeatherIcon}.png`}
                alt="Tokyo's weather icon"
                loading="eager"
                width={70}
                height={70}
                priority
              />
            </div>
            <div className={styles.weather__weekly}>
              <ul className={styles.weather__weekly__list}>
                {weatherNews.daily.map((date, index) => {
                  const time = new Date(date.dt * 1000);
                  let day = week[time.getDay()];
                  const nowDay = week[new Date().getDay()];
                  if (day == nowDay) {
                    day = "Today";
                  }
                  if (index == 0 || index > 5) {
                    return;
                  }
                  return (
                    <li key={index}>
                      <p>{day}</p>
                      <span>
                        <Image
                          src={`/weather/${date.weather[0].icon}.png`}
                          className={styles.weatehr__icon}
                          alt={`${date.weather[0].icon}`}
                          loading="eager"
                          width={41}
                          height={41}
                          priority
                        />
                      </span>
                      <div className={styles.weather__temp}>
                        <div className={styles.weather__temp__wrap}>
                          <p className={styles.weather__temp__high}>
                            {parseInt(date.temp.max.toLocaleString(), 10)}˚c
                          </p>
                          <p className={styles.weather__temp__low}>
                            {parseInt(date.temp.min.toLocaleString(), 10)}˚c
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Weather;
