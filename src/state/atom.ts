import { atom } from 'recoil';

export const listaDeParticipantesState = atom<string[]>({
    key: 'listaDeParticipantesState',
    default: []
});

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})