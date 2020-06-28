import React from "react";
import Brand from "./brand/Brand";
import Persona from "../player-persona/Player";

const Header = () => {
  return (
    <div className="grid grid-cols-4 m-4">
      <div className="col-start-1 col-span-1">
        <Brand />
      </div>
      <div className="col-end-5 col-span-2">
        <Persona />
      </div>
    </div>
  );
};

export default Header;
