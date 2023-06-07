import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";
import s from "./PageFooter.module.scss";
import { SocialLinksList } from "../business-components";

export function PageFooter() {
  const footerLinks: Anchor[] = [
    { text: "Home", href: "/home" },
    { text: "Pricing" },
    { text: "Products" },
    { text: "About US" },
    { text: "Carrers" },
    { text: "Community" },
    { text: "Privacy Policy" },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100 | padding-block-700">
      <div className="container">
        <div className="even-columns">
          <div className="flex flex-col space-between align-items-center align-items-fist-baseline-md">
            <SocialLinksList />

            <a href="#">
              <Image
                src="images/logo.svg"
                alt="Manage"
                width="146"
                height="24"
              />
            </a>
          </div>

          <div>
            <nav className={s["footer-nav"]}>
              <ListAnchors
                ulClassName="flow flow--tight"
                anchors={footerLinks}
                ulAriaLabel="Footer"
              />
            </nav>
          </div>

          <div>
            <form action="">
              <input type="email" />
              <button className="button">Go</button>
              <p>Copyright 2020. All Rights Reserved</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
