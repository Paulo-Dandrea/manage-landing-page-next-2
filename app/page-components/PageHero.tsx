import Image from "next/image";
import ilustrationIntro from "/public/images/illustration-intro.svg";
import { BTNGetStarted } from "../business-components/index";

export function PageHero() {
  return (
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div className="flow">
            <h1 className="fs-primary-heading fw-bold">
              Bring everyone together to build better products.
            </h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <BTNGetStarted />
          </div>
          <div className="">
            <Image
              src={ilustrationIntro}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
