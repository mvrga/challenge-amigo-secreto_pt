interface NameListProps {
  names: string[];
}

export function NameList({ names }: NameListProps) {
  return (
    <ul className="list-disc pl-5">
      {names.map((n, i) => <li key={i}>{n}</li>)}
    </ul>
  );
}
