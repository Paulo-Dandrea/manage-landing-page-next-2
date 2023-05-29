import Image from "next/image";
import ListAnchors from "../components/ListAnchors";



export default function PageHeader() {
  const navOptions = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <header className="primary-header">
      <div className="container">

        <a href="#">
          <Image src="images/logo.svg" alt="Manage" width="146" height="24" />
        </a>

        <nav className="primary-navigation">
          <ListAnchors anchors={navOptions}/>
        </nav>

        <button className="button">Get Started</button>
      </div>
   </header>
  );
}
