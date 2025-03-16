//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AmigoSecretoApp() {
  const [nome, setNome] = useState("");
  const [listaNomes, setListaNomes] = useState<string[]>([]);
  const [sorteado, setSorteado] = useState<string | null>(null);

  const adicionarNome = () => {
    if (nome.trim() === "") {
      alert("Por favor, insira um nome válido.");
      return;
    }
    setListaNomes([...listaNomes, nome.trim()]);
    setNome("");
  };

  const sortearAmigo = () => {
    if (listaNomes.length === 0) {
      alert("A lista está vazia. Adicione nomes antes de sortear.");
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    setSorteado(listaNomes[indiceAleatorio]);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h1 className="text-xl font-bold text-center">Amigo Secreto 🎁</h1>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Digite o nome do amigo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Button onClick={adicionarNome}>Adicionar</Button>
          </div>
          <ul className="list-disc pl-5">
            {listaNomes.map((nome, index) => (
              <li key={index}>{nome}</li>
            ))}
          </ul>
          <Button variant="secondary" onClick={sortearAmigo}>
            Sortear Amigo
          </Button>
          {sorteado && (
            <div className="text-center mt-4 font-semibold text-green-600">
              🎉 O amigo sorteado foi: {sorteado}!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
