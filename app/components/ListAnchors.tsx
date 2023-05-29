type ListAnchorsProps = {
  anchors: string[];
};

export default function ListAnchors({ anchors }: ListAnchorsProps) {
  return (
    <ul role="list">
      {anchors.map((anchor, i) => (
        <li key={i}>
          <a href="#">{anchor}</a>
        </li>
      ))}
    </ul>
  );
}