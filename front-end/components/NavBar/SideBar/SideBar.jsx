import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import { GrClose } from "react-icons/gr";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { helpCenter, discover, socialLinked } from "../../utils";

const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };
  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };
  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image
          src={images.logo}
          alt="logo"
          width={150}
          height={150}
          className="mb-[40px]"
        />
        <p>
          Discover the most outstanding articles on all topices of NFT & your
          own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          {socialLinked &&
            socialLinked.map((el, i) => (
              <a href={el.link} key={i + 1}>
                {el.icon}
              </a>
            ))}
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div
          className={Style.sideBar_menu_box}
          onClick={() => openDiscoverMenu()}>
          <p>Discover</p>
          <TiArrowSortedDown />
        </div>
        {openDiscover && (
          <div className={Style.sideBar_discover}>
            {discover &&
              discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
          </div>
        )}
        <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
          <p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        {openHelp && (
          <div className={Style.sideBar_help}>
            {helpCenter &&
              helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
          </div>
        )}
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={() => {}} />
        <Button btnName="Create Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
