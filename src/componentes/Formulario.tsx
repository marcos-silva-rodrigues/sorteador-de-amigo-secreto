import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hooks/useMensagemDeErro';
import "./Formulario.css"

const Formulario = () => {
    const [nome, setNome] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const adicionarNaLista = useAdicionarParticipante();
    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adicionarNaLista(nome);
        setNome('')
        inputRef.current?.focus();

    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className="grupo-input-btn">
                <input

                    ref={inputRef}
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    type="text"
                    placeholder='Insira os nomes dos participantes'
                />
                <button className="alerta error" disabled={!nome}>Adicionar</button>
            </div>

            {mensagemDeErro && (<p role="alert">{mensagemDeErro}</p>)}
        </form>
    )
}

export default Formulario;