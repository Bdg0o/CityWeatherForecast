import { DayProps } from "./Day.types";
import "./Day.css";
import Temperature from "@/components/Temperature";
import formatDate from "@/utils/formatDate";

const Day = ({ date, temperature }: DayProps) => {
  const formattedDate = formatDate(date);
  return (
    <div className="Day">
      <span className="Day-date">{formattedDate}</span>
      <Temperature value={temperature} />
    </div>
  );
};

export default Day;
