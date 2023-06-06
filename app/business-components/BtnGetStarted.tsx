import page_s from "../styles/page.module.scss";

interface Props {
  datatype?: string | undefined;
  className?: string | undefined;
}
// TODO: Make this btn receive text argument
export function BTNGetStarted({ datatype, className="" }: Props) {
  return (
    <button className={`${page_s.btn} ${className}`} datatype={datatype}>
      Get Started
    </button>
  );
}
