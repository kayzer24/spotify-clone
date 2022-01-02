import {atom} from 'recoil';

export const currentTrackIdState = atom({
    key: 'currentTrackIdState', // unique ID (with respect to other atoms/selectors)
    default: null, // valeur par défaut (alias valeur initials)
});

export const isPlayingState = atom({
    key: 'isPlayingState', // unique ID (with respect to other atoms/selectors)
    default: false, // valeur par défaut (alias valeur initials)
});