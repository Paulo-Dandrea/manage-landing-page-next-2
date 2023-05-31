import Image from "next/image";
import ListAnchors, { Anchor } from "../components/ListAnchors";

export function PageHeader() {
  const navOptions: Anchor[] = [
    { text: "Pricing" },
    { text: "Product" },
    { text: "About Us" },
    { text: "Careers" },
    { text: "Community" },
  ];

  return (
    <header className="primary-header">
      <div className="container">
        <a href="#">
          <Image src="images/logo.svg" alt="Manage" width="146" height="24" />
        </a>

        <nav className="primary-navigation">
          <ListAnchors anchors={navOptions} ulAriaLabel="Primary" />
        </nav>

        <button className="button">Get Started</button>
      </div>
    </header>
  );
}
