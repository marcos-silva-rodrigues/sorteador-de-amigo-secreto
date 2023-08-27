import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from 'recoil'
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";

jest.mock('../state/hooks/useListaDeparticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
});

const mockSorteio = jest.fn();
jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
});



describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    })
    test("a brincadeira não pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });
})

describe("quando existem participantes suficientes", () => {
    const participantes = ['Ana', 'Catarina', 'Josefina']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    })
    test("a brincadeira pode ser iniciada", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
    })

    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    })
})