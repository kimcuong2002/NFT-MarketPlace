import React from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./Profile.module.css";
import images from "../../../img";
import Discover from "../Discover/Discover";
import { TbDownloadOff } from "react-icons/tb";
import { profileOptions } from "../../utils";

const Profile = ({ className }) => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_infor}>
          <p>Diamond Shine</p>
          <small>x93275892735298572028...</small>
        </div>
      </div>
      <div className={Style.profile_menu_one}>
        {profileOptions &&
          profileOptions.map((el, i) => (
            <div className={Style.profile_menu_one_item}>
              {el.icon}
              <p>
                <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
