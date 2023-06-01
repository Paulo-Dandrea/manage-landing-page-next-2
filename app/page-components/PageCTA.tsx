import {BTNGetStarted} from "../business-components";

export function PageCTA() {
  return (
    <section className="cta | bg-accent-400 text-neutral-100 padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div>
            <p className="fs-secondary-heading fw-bold">
              Simplify how your team works today.
            </p>
          </div>
          <div>
            <BTNGetStarted datatype="inverted" />
          </div>
        </div>
      </div>
    </section>
  );
}
