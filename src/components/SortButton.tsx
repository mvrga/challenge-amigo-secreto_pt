import { Button } from "@/components/ui/button";

interface SortButtonProps {
  onSort: () => void;
}

export function SortButton({ onSort }: SortButtonProps) {
  return <Button variant="secondary" onClick={onSort}>Sortear Amigo</Button>;
}
