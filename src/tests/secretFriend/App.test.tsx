import { render, screen, fireEvent } from '@testing-library/react';
import App from '@/App';

describe('Amigo Secreto App', () => {
  it('adiciona nome e realiza sorteio', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Digite o nome/);
    const addBtn = screen.getByText('Adicionar');

    fireEvent.change(input, { target: { value: 'Ana' } });
    fireEvent.click(addBtn);

    expect(screen.getByText('Ana')).toBeInTheDocument();

    const sortBtn = screen.getByText('Sortear Amigo');
    fireEvent.click(sortBtn);

    expect(screen.getByText(/O amigo sorteado foi:/)).toBeInTheDocument();
  });
});
