import page_s from "../styles/page.module.scss";

interface Props {
  text?: string;
  datatype?: string | undefined;
  className?: string | undefined;
}

export function Btn({ text, datatype, className = "" }: Props) {
  return (
    <button className={className} datatype={datatype}>
      {text}
    </button>
  );
}
