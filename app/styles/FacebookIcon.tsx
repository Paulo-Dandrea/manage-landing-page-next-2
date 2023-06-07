const SvgComponent = ({ pathD, svgClassName, ariaLabel, ...props }) => (
  <svg
    className={svgClassName}
    aria-label={ariaLabel}
    xmlns="http://www.w3.org/2000/svg"
    //    width={400} height={400}
    // {...props}
  >
    <path d={pathD} />
  </svg>
);
export default SvgComponent;
