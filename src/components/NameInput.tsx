import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NameInputProps {
  onAdd: (name: string) => void;
}

export function NameInput({ onAdd }: NameInputProps) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim() === "") {
      alert("Por favor, insira um nome válido.");
      return;
    }
    onAdd(name.trim());
    setName("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do amigo"
      />
      <Button onClick={handleAdd}>Adicionar</Button>
    </div>
  );
}
