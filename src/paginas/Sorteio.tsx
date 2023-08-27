import React, { useState } from 'react';
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';
import Card from '../componentes/Card';
import './Sorteio.css'

const Sorteio = () => {
    const participantes = useListaDeParticipantes();
    const resultadoSorteio = useResultadoSorteio();
    const [participanteDavez, setParticipanteDavez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const sortear = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (resultadoSorteio.has(participanteDavez)) {
            setAmigoSecreto(resultadoSorteio.get(participanteDavez)!)
        }
    }

    return (
        <Card>
            <section className="sorteio">
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        required
                        name="participanteDavez"
                        id="participanteDavez"
                        placeholder="Selecione o seu nome"
                        value={participanteDavez}
                        onChange={event => setParticipanteDavez(event.target.value)}
                    >
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </select>
                    <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                    <button className="botao-sortear">Sortear</button>
                </form>
                {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
                <footer className="sorteio">
                    <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    );
}

export default Sorteio;