export type Anchor = {
  text?: string;
  ariaLabel?: string;
  href?: string;
  target?: string;
  pathD?: string;
};

type ListAnchorsProps = {
  anchors: Anchor[];
  ulAriaLabel?: string;
  ulId?: string;
  ulClassName?: string;
};

export default function ListAnchors({
  anchors,
  ulAriaLabel = "",
  ulId = "",
  ulClassName = "",

}: ListAnchorsProps) {
  return (
    <ul className={ulClassName} role="list" aria-label={ulAriaLabel} id={ulId}>
      {anchors.map((anchor, i) => (
        <li key={i}>
          <a
            href={anchor.href || "#"}
            target={anchor.target}
            aria-label={anchor.ariaLabel}
          >
            {anchor.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
