import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Rodape = () => {
    const participantes = useListaDeParticipantes();

    const navigate = useNavigate();
    const iniciar = () => {
        navigate('/sorteio');
    }

    return (
        <footer className="rodape-configuracoes">
            <button
                className="botao"
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                <img src="/imagens/sacolas.png" alt="Sacolas de compras" />

                Iniciar brincadeira
            </button >
        </footer >
    )
}

export default Rodape;