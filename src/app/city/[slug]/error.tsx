"use client"; // Error components must be Client Components

import PopOver from "@/components/PopOver";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PopOver>
      <h2>Something went wrong !</h2>
      <div className="text-center mt-30">
        <button onClick={() => reset()}>Please try again</button>
      </div>
    </PopOver>
  );
}
