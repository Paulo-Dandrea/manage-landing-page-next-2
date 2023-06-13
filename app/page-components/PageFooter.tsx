import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";
import s from "./PageFooter.module.scss";
import page_s from "../styles/page.module.scss";
import { SocialLinksList } from "../business-components";
import { Btn } from "../components/Btn";

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
      <div className="container flow">
        <div className={`
        ${s['primary-footer-wrapper']}
        1even-columns 
        `}>
          <div className="justify-self-center">
            <form action="">
              <input type="email" />
              <Btn
                text="Go"
                className={`${page_s.btn} ${page_s["btn--form"]}`}
              />
            </form>
          </div>

          {/* TODO: Probably, because of the justify-self-center, all elements are narrowed in the middle */}
          <div className="justify-self-center">
            <nav className={s["footer-nav"]}>
              <ListAnchors
                ulClassName="flow flow--tight"
                anchors={footerLinks}
                ulAriaLabel="Footer"
              />
            </nav>
          </div>

          <div
            className="flex flex-direction-column gap-2
             flex-column-reversed-md
             space-between align-items-center align-items-fist-baseline-md
             "
          >
            <SocialLinksList />
            <a href="#">
              <Image
                // TODO: I'm not being DRY with the svg here. I Need to find a solution to dinamically change the fill-color of the svg on NEXT;
                src="images/logo-white.svg"
                alt="Manage"
                width="146"
                height="24"
              />
            </a>
          </div>
        </div>
        
        <div className="flex justify-content-center">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
