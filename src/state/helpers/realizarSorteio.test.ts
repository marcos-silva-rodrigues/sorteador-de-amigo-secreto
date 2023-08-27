import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de um amigo secreto", () => {
    test("cada participante não sorteie o proprio nome", () => {
        const participantes = [
            "Vinicius",
            "Juliana",
            "Ana",
            "Catarina",
            "Nathália",
            "João",
        ];

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        });
    });
}) 