import { BTNGetStarted } from "../business-components";
import s from "./PageCTA.module.scss";

export function PageCTA() {
  return (
    <section
      className={`${s.cta} | bg-accent-400 text-neutral-100 padding-block-900`}
    >
      <div className="container">
        <div className="even-columns vertical-align-center">
          <div>
            <p className="fs-primary-heading fw-bold">
              Simplify how your team works today.
            </p>
          </div>
          <div className="justify-self-center justify-self-end-md">
            <BTNGetStarted datatype="inverted" />
          </div>
        </div>
      </div>
    </section>
  );
}
