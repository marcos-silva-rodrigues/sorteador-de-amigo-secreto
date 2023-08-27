import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";

const Rodape = () => {
    const participantes = useListaDeParticipantes();
    const sortear = useSorteador();

    const navigate = useNavigate();
    const iniciar = () => {
        sortear();
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