import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "./Footer.module.css";
import images from "../../img";
import { socialLinked } from "../utils";
import { RiSendPlaneFill } from "react-icons/ri";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image
            src={images.logo}
            alt="footer logo"
            height={100}
            width={100}
            className={Style.footer_logo}></Image>
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell and discover
            exclusive digitals items{" "}
          </p>
          <div className={Style.footer_social}>
            {socialLinked &&
              socialLinked.map((el, i) => (
                <a href="#" key={i + 1}>
                  {el.icon}
                </a>
              ))}
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <p className={Style.footer_box_header}>Discover</p>
          <Discover />
        </div>
        <div className={Style.footer_box_helpCenter}>
          <h3 className={Style.footer_box_header}>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={Style.subscribe}>
          <p className={Style.footer_box_header}>Subscribe</p>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, Collect and sell extraordinary NFTs Opensea is the first
              largest NFT Marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
