import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";
import s from './PageHeader.module.scss'

/* TODO:
- Remove globalized page button style
- how to import a style from other module?
*/

export function PageHeader() {
  const navOptions: Anchor[] = [
    { text: "Pricing" },
    { text: "Product" },
    { text: "About Us" },
    { text: "Careers" },
    { text: "Community" },
  ];

  return (
    <header className={s.primary_header}>
      <div className="container">
        <div className={s.nav_wrapper}>
          <a href="#">
            <Image src="images/logo.svg" alt="Manage" width="146" height="24" />
          </a>
          <button
            className={s.mobile_nav_toggle}
            aria-controls="primary_navigation"
          >
            <Image
              className={s.icon_hamburger}
              src="images/icon-hamburger.svg"
              width="25"
              height="18"
              alt=""
              aria-hidden="true"
            />
            <Image
              className={s.icon_close}
              src="images/icon-close.svg"
              width="25"
              height="18"
              alt=""
              aria-hidden="true"
            />
            <span className="visually-hidden">Menu</span>
          </button>

          <nav className={s.primary_navigation}>
            <ListAnchors
              anchors={navOptions}
              ulAriaLabel="Primary"
              ulId="primary_navigation"
            />
          </nav>

          <button 
          className="button"
          style={{display: 'none'}} // TODO: remove this line later
          >Get Started</button>
        </div>
      </div>
    </header>
  );
}
