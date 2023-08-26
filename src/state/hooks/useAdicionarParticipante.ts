import { useSetRecoilState, useRecoilValue } from 'recoil';
import { errorState, listaDeParticipantesState } from '../atom';

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaDeParticipantesState);
    const lista = useRecoilValue(listaDeParticipantesState);
    const setErro = useSetRecoilState(errorState);

    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro("Nomes duplicados não são permitidos!");

            setTimeout(() => {
                setErro("");
            }, 5000);
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
    }
}