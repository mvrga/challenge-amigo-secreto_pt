import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { NameInput } from "./components/NameInput";
import { NameList } from "./components/NameList";
import { SortButton } from "./components/SortButton";
import { ResultDisplay } from "./components/ResultDisplay";
import { drawRandomName } from "./features/secretFriend/utils";

export default function App() {
  const [names, setNames] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAdd = (name: string) => setNames([...names, name]);
  const handleSort = () => {
    if (names.length === 0) {
      alert("A lista está vazia. Adicione nomes.");
      return;
    }
    setResult(drawRandomName(names));
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h1 className="text-xl font-bold text-center">Amigo Secreto 🎁</h1>
          <NameInput onAdd={handleAdd} />
          <NameList names={names} />
          <SortButton onSort={handleSort} />
          <ResultDisplay result={result} />
        </CardContent>
      </Card>
    </div>
  );
}
