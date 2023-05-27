import { TemperatureProps } from "./Temperature.types";
import "./Temperature.css";

const Temperature = ({ value, className = "" }: TemperatureProps) => (
  <span className={`Temperature ${className}`}>
    {Math.round(value)}
    <span className="Temperature-unit">°C</span>
  </span>
);

export default Temperature;
