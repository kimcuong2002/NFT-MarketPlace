import React from "react";
import Link from "next/link";
import Style from "./Discover.module.css";
import { discover } from "../../utils";

const Discover = ({ className }) => {
  return (
    <div className={`${className}`}>
      {discover &&
        discover.map((el, i) => (
          <div key={i + 1} className={Style.discover}>
            <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
          </div>
        ))}
    </div>
  );
};

export default Discover;
