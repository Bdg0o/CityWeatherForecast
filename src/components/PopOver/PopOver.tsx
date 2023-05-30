import Link from "next/link";
import { PopOverProps } from "./PopOver.types";

import "./PopOver.css";

const PopOver = ({ children }: PopOverProps) => {
  return (
    <div className="PopOver">
      {children}
      <Link href="/" className="PopOver-close">
        🞩
      </Link>
    </div>
  );
};

export default PopOver;
