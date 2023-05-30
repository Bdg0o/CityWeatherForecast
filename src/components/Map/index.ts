"use client";

import dynamic from "next/dynamic";

/* Dynamic loading of the Map component forces the component to be client-side rendered. */
const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false
});

export default DynamicMap;
