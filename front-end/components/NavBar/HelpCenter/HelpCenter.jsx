import React from "react";
import Link from "next/link";
import Style from "./HelpCenter.module.css";
import { helpCenter } from "../../utils";

const HelpCenter = () => {
  return (
    <div className={Style.box}>
      {helpCenter &&
        helpCenter.map((el, i) => (
          <div className={Style.helpCenter} key={i}>
            <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
          </div>
        ))}
    </div>
  );
};

export default HelpCenter;
