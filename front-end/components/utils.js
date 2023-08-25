import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

const helpCenter = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
  {
    name: "Sign up",
    link: "sign-up",
  },
  {
    name: "Sign in",
    link: "sign-in",
  },
  {
    name: "Subscription",
    link: "subscription",
  },
];
const discover = [
  {
    name: "Collection",
    link: "collection",
  },
  {
    name: "Search",
    link: "search",
  },
  {
    name: "Author Profile",
    link: "author-profile",
  },
  {
    name: "NFT Details",
    link: "nft-details",
  },
  {
    name: "Account Setting",
    link: "account-setting",
  },
  {
    name: "Connect Wallet",
    link: "connect-wallet",
  },
  {
    name: "Blog",
    link: "blog",
  },
];
const socialLinked = [
  {
    link: "#",
    icon: <TiSocialFacebook />,
  },
  {
    link: "#",
    icon: <TiSocialLinkedin />,
  },
  {
    link: "#",
    icon: <TiSocialTwitter />,
  },
  {
    link: "#",
    icon: <TiSocialYoutube />,
  },
  {
    link: "#",
    icon: <TiSocialInstagram />,
  },
];
const profileOptions = [
  {
    icon: <FaUserAlt />,
    name: "My Profile",
    link: "/myprofile",
  },
  {
    icon: <FaRegImage />,
    name: "My Items",
    link: "/my-item",
  },
  {
    icon: <FaUserEdit />,
    name: "Edits Profile",
    link: "/edit-profile",
  },
  {
    icon: <MdHelpCenter />,
    name: "Help",
    link: "/help",
  },
  {
    icon: <TbDownload />,
    name: "Disconnect",
    link: "/disconnect",
  },
];

export { helpCenter, discover, socialLinked, profileOptions };
