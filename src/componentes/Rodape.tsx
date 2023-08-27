import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";
import './Rodape.css';


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
                Iniciar brincadeira
            </button >
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer >
    )
}

export default Rodape;