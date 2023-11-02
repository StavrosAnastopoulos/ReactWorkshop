import { NavList } from "./navigation";
import { Toolbar } from "./toolbar";
import { Advertisement } from "../shared/advertisement";

export function Shell({ routedComponent }) {
  return (
    <div className="main-grid">
      <div className="top-bar">
        <Toolbar />
      </div>
      <div className="left-panel">
        <NavList />
      </div>
      <div className="right-panel">
        <Advertisement />
      </div>
      <div className="main-content">
        { routedComponent && routedComponent() }
      </div>
    </div>
  );
}
