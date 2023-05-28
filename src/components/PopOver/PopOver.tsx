import Link from "next/link";

import "./PopOver.css";
import { PopOverProps } from "./PopOver.types";

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
