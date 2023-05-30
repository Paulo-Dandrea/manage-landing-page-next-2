import Image from "next/image";
import s from "./styles/page.module.scss";
import PageHeader from "./page-components/PageHeader";
import ilustrationIntro from '../public/images/illustration-intro.svg'

// TODO: 1. Separate already created components into a separate folder

export default function Home() {
  return (
    <div className={s["page-container"]}>
      <PageHeader />

      <main>
        {/* Text hero and ilustration */}
        <section className="padding-block-900">
          <div className={s.container} >
            <div className={s['even-columns']}>
              <div className="">
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="button">Get Started</button>
              </div>
              <div className="">
                <Image
                  src={ilustrationIntro}
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explanations */}
        <section className="padding-block-900">
          <div className={s.container} >
            <div className={s['even-columns']}>
              <div>
                <h2 className="fs-secondary-heading fw-bold">
                  What’s different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>

              <div>
                <ul className="numbered-items" role="list">
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Track company-wide progress
                    </h3>
                    <p>
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Advanced built-in reports
                    </h3>
                    <p>
                      Set internal delivery estimates and track progress toward
                      company goals. Our customisable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      informed.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Everything you need in one place
                    </h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="carousel | padding-block-700">
          <h2 className="fs-secondary-heading fw-bold">What they’ve said</h2>
          {/* Carousel */}
          <button className="button">Get Started</button>
        </section>

        <section className="cta | bg-accent-400 text-neutral-100 padding-block-900">
          <div className={s.container} >
            <div className={s['even-columns']}>
              <div>
                <p className="fs-secondary-heading fw-bold">
                  Simplify how your team works today.
                </p>
              </div>
              <div>
                <button className="button" datatype="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-neutral-100 | padding-block-700">
        <div className={s.container} >
          <div className={s['even-columns']}>
            <div>
              <a href="#">
                <Image
                  src="images/logo.svg"
                  alt="Manage"
                  width="146"
                  height="24"
                />
              </a>
              <ul role="list" aria-label="social-links">
                <li>
                  <a aria-label="facebook" href="#"></a>
                </li>
                <li>
                  <a aria-label="youtube" href="#"></a>
                </li>
                <li>
                  <a aria-label="twitter" href="#"></a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#"></a>
                </li>
                <li>
                  <a aria-label="instagram" href="#"></a>
                </li>
              </ul>
            </div>

            <div>
              <nav className="foorter-nav">
                <ul role="list" aria-label="Footer">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
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
    </div>
  );
}
