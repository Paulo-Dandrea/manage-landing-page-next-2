interface Props {
  pathD: string;
  svgClassName: string;
  ariaLabel: string;
}

const SvgComponent = ({ pathD, svgClassName, ariaLabel, ...props }: Props) => (
  <svg
    className={svgClassName}
    aria-label={ariaLabel}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d={pathD} />
  </svg>
);
export default SvgComponent;
