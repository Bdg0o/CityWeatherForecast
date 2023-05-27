import Link from "next/link";
import Day from "@/components/Day";
import { CityProps } from "./City.types";
import Temperature from "@/components/Temperature";

import "./City.css";

const City = ({ name, weatherData }: CityProps) => {
  return (
    <div className="City">
      <div className="City-inner">
        <h2 className="City-name">{name}</h2>
        <Temperature
          className="City-currentTemperature"
          value={weatherData.current.temp}
        />
        <h3 className="City-nextTitle">Next days</h3>
        <div className="City-days">
          {weatherData.daily.slice(1, 4).map((day) => (
            <Day key={day.dt} date={day.dt} temperature={day.temp.day} />
          ))}
        </div>
      </div>
      <Link href="/" className="City-close">
        🞩
      </Link>
      <span className="City-bg">{name}</span>
    </div>
  );
};

export default City;
