import NavLink from "@/components/NavLink";
import classnames from "classnames";
import { AMAZON_URL, SPOTIFY_URL, TIKTOK_URL, YOUTUBE_URL } from "../../consts";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={classnames(
    styles.Footer,
    "flex flex-col flex-grow text-center py-8 space-y-8",
  )}>
    <div className="space-y-4">
      <h4 className="text-base text-forrest-dark">Find more <span className="md:inline">happiness</span> at</h4>
      <div className="flex mx-10 text-3xl items-center flex-wrap justify-center gap-6">
        <a href={YOUTUBE_URL}>
          <i className="fab fa-lg fa-fw fa-youtube" aria-hidden></i>
        </a>
        <a href="https://www.facebook.com/happysingingkids">
          <i className="fab fa-lg fa-fw fa-facebook" aria-hidden></i>
        </a>
        <a href="https://www.instagram.com/happysingingkids">
          <i className="fab fa-lg fa-fw fa-instagram" aria-hidden></i>
        </a>
        <a href={SPOTIFY_URL}>
          <i className="fab fa-lg fa-fw fa-spotify" aria-hidden></i>
        </a>
        <a href={TIKTOK_URL}>
          <i className="fab fa-lg fa-fw fa-tiktok" aria-hidden></i>
        </a>
        <a href={AMAZON_URL}>
          <i className="fab fa-lg fa-fw fa-amazon" aria-hidden></i>
        </a>
      </div>
    </div>
    <div className="text-sm text-forrest-dark flex space-x-2 items-center justify-center">
      {/*<span>Or check out our</span>*/}
      <ul className="list-none inline-flex justify-center space-x-2">
        <li>
          <NavLink href="/privacy-policy" className="text-sm hover:text-grape" activeClassName="">
            Privacy policy
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
