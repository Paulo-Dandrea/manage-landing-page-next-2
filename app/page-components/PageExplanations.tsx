import { CSSProperties } from "react";
import s from "../styles/page.module.scss";

// TODO: Is it possible to do a more generic ListGenerator to be open to put children?

export function PageExplanations() {
  return (
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div className="flow">
            <h2 className="fs-secondary-heading fw-bold">
              What’s different about Manage?
            </h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div>
            {/* TODO: Try to use ListGenerator */}
            <ul className="numbered-items | flow" role="list">
              <li>
                <div
                  className="flow--tight"
                >
                  <h3 className="fs-600 fw-bold">
                    Track company-wide progress
                  </h3>
                  <p data-width="wide">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </li>
              <li>
                <div
                  className="flow--tight"
                >
                  <h3 className="fs-600 fw-bold">Advanced built-in reports</h3>
                  <p data-width="wide">
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </li>
              <li>
                <div
                  className="flow--tight"
                >
                  <h3 className="fs-600 fw-bold">
                    Everything you need in one place
                  </h3>
                  <p data-width="wide">
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
