import {atom} from 'recoil';

export const playlistState = atom({
    key: 'playlistState', // unique ID (with respect to other atoms/selectors)
    default: null, // valeur par défaut (alias valeur initials)
})

export const playlistIdState = atom({
    key: 'playlistIdState', // unique ID (with respect to other atoms/selectors)
    default: '51961A0rt1kANNoRkFb6SY', // valeur par défaut (alias valeur initials)
});