interface ResultDisplayProps {
  result: string | null;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) return null;
  return (
    <div className="text-center mt-4 font-semibold text-green-600">
      🎉 O amigo sorteado foi: {result}!
    </div>
  );
}
