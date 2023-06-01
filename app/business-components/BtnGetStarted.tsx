import page_s from "../styles/page.module.scss";

interface Props {
  datatype?: string | undefined;
}
// TODO: Make this btn receive text argument
export function BTNGetStarted({ datatype }: Props) {
  return (
    <button className={page_s.btn} datatype={datatype}>
      Get Started
    </button>
  );
}
