"use client";

import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";
import s from "./PageHeader.module.scss";
import { useState } from "react";
import { BTNGetStarted } from "../business-components";

/* TODO:
- Remove globalized page button style
- how to import a style from other module?
*/

export function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions: Anchor[] = [
    { text: "Pricing" },
    { text: "Product" },
    { text: "About Us" },
    { text: "Careers" },
    { text: "Community" },
  ];

  return (
    <header className={s.primary_header} data-overlay={isMenuOpen}>
      <div className="container">
        <div className={s.nav_wrapper}>
          <a href="#">
            <Image src="images/logo.svg" alt="Manage" width="146" height="24" />
          </a>
          <button
            className={s.mobile_nav_toggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

          <nav
            className={`${
              isMenuOpen ? s.primary_navigation_expanded : s.primary_navigation
            }`}
            id="primary_navigation"
          >
            <ListAnchors
              anchors={navOptions}
              ulClassName={s.nav_list}
              ulAriaLabel="Primary"
            />
          </nav>

          <BTNGetStarted className="display_sm_none | display_md_inline_flex"/>
        </div>
      </div>
    </header>
  );
}
