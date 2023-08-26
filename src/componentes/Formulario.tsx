import React from 'react'
import styles from "./Formulario.module.css"

const Formulario = () => {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder='Insira os nomes dos participantes' />
            <button className={styles.button} disabled={true}>Adicionar</button>
        </form>
    )
}

export default Formulario;