import { Character, Nullable } from './../types/types';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useCharacters = (): Nullable<Character[]> => {
    const [characters, setCharacters] = useState<Nullable<Character[]>>(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((res) => {
            setCharacters(res.data.results);
        });
    }, []);

    return characters;
};
