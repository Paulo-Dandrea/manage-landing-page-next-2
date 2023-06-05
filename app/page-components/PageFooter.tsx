import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";

export function PageFooter() {
  const footerLinks: Anchor[] = [
    { text: "Home", href: "/home" },
    { text: "Pricing" },
    { text: "Products" },
    { text: "Carrers" },
    { text: "Community" },
    { text: "Privacy Policy" },
  ];

  const socialLinksImages: Anchor[] = [
    { ariaLabel: "facebook" },
    { ariaLabel: "youtube" },
    { ariaLabel: "twitter" },
    { ariaLabel: "pinterest" },
    { ariaLabel: "instagram" },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100 | padding-block-700">
      <div className="container">
        <div className="even-columns">
          <div>
            <a href="#">
              <Image
                src="images/logo.svg"
                alt="Manage"
                width="146"
                height="24"
              />
            </a>
            <ListAnchors
              anchors={socialLinksImages}
              ulAriaLabel="social-links"
            />
          </div>

          <div>
            <nav className="foorter-nav">
              <ListAnchors ulClassName="flow flow--tight"anchors={footerLinks} ulAriaLabel="Footer" />
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
