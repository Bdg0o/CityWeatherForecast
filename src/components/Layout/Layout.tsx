import Map from "@/components/Map";
import { LayoutProps } from "./Layout.types";

import "./Layout.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="Layout">
      <header className="Layout-header">
        <h1 className="Layout-headerTitle">City weather Forecast</h1>
      </header>
      <div className="Layout-content">
        <Map />
        {children}
      </div>
    </main>
  );
};

export default Layout;
