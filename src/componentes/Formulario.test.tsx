import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import Formulario from "./Formulario";


describe("Comportamento do formulario", () => {
    test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole('button');

        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();

    });

    test("Adicionar um participante caso exista umm nome preenchido", () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Fulano teste'
            }
        });

        fireEvent.click(botao);
        expect(input).toHaveFocus();
        expect(input).toHaveValue("");
    })

    test("Nomes duplicados não podem ser adicionados na lista", () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Fulano teste'
            }
        });

        fireEvent.click(botao);

        fireEvent.change(input, {
            target: {
                value: 'Fulano teste'
            }
        });

        fireEvent.click(botao);

        const mensagemDeErro = screen.getByRole('alert');
        expect(mensagemDeErro.textContent).toBe("Nomes duplicados não são permitidos!")
    })

    test("A mensagem de erro deve sumir apos os timers", () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
        const botao = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Fulano teste'
            }
        });

        fireEvent.click(botao);

        fireEvent.change(input, {
            target: {
                value: 'Fulano teste'
            }
        });

        fireEvent.click(botao);

        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();

        act(() => {
            jest.runAllTimers();
        })

        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    })
})
