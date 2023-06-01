import s from "./styles/page.module.scss";
import {
  PageCTA,
  PageExplanations,
  PageFooter,
  PageHeader,
  PageHero,
  PageTestemonials,
} from "./page-components";

// TODO: Use the name of the Page instead

export default function Home() {
  return (
    <div className={s["page-container"]}>
      <PageHeader />
      <main>
        <PageHero />
        <PageExplanations />
        <PageTestemonials />
        <PageCTA />
      </main>
      <PageFooter />
    </div>
  ); 
}
