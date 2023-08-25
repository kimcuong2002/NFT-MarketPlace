import React from "react";
import Image from "next/image";
import Style from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_image}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_infor}>
          <div className={Style.notification_box_infor_name}>
            <h4>Diamond Shine</h4>
            <span className={Style.notification_box_new}></span>
          </div>
          <p>Measure action for user...</p>
          <small>3 minutes ago</small>
        </div>
      </div>
    </div>
  );
};

export default Notification;
