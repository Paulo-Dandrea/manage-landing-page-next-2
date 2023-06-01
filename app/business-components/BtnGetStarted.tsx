import page_s from "../styles/page.module.scss";

interface Props {
  datatype?: string | undefined;
}

export function BTNGetStarted({ datatype }: Props) {
  return (
    <button className={page_s.btn} datatype={datatype}>
      Get Started
    </button>
  );
}
