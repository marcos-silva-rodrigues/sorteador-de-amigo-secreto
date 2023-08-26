import React, { useRef, useState } from 'react'
import styles from "./Formulario.module.css"
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hooks/useMensagemDeErro';

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
        <form className={styles.form} onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                className={styles.input}
                type="text"
                placeholder='Insira os nomes dos participantes'
            />
            <button className={styles.button} disabled={!nome}>Adicionar</button>
            {mensagemDeErro && (<p role="alert">{mensagemDeErro}</p>)}
        </form>
    )
}

export default Formulario;