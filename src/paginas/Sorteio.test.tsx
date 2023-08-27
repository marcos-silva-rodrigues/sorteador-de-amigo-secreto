import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import Sorteio from "./Sorteio";

jest.mock('../state/hooks/useListaDeparticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});


describe("A pagina de sorteio", () => {
    const participantes = ['Ana', 'Catarina', 'Josefina']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test("todos os participantes podem exibir o seu amigo secreto", () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole("option");
        expect(opcoes).toHaveLength(participantes.length);
    })
})