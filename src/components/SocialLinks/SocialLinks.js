import { useRef } from "react";
import "./SocialLinks.css";

const SocialLinks = ({ type }) => {
  const links = useRef([
    { path: "https://www.twitter.com", icon: "twitter" },
    { path: "https://www.facebook.com", icon: "facebook" },
    { path: "https://www.linkedin.com", icon: "linkedin" },
    { path: "https://www.rss.com", icon: "rss" },
    { path: "https://www.instagram.com", icon: "instagram" },
    { path: "https://www.pinterset.com", icon: "pinterest-p" },
  ]);
  return (
  <ul
    className={` d-flex ${
      type === "simple"
        ? "footer-list justify-content-between"
        : "advanced-list"
    }`}
  >
    {type === "advanced"
      ? links.current
          .map((link, index) =>
            index < 4 ? (
              <li className="m-2" key={link.path}>
                <a href={link.path}>
                  <i className={`fa fa-${link.icon}`}></i>
                </a>
              </li>
            ) : null
          )
          .filter((link) => link)
      : links.current
          .map((link, index) =>
            index > 3 || index === 0 ? (
              <li className="m-2" key={link.path}>
                <a href={link.path}>
                  <i className={`fa fa-${link.icon}`}></i>
                </a>
              </li>
            ) : null
          )
          .filter((link) => link)}
  </ul>
);}

export default SocialLinks;
