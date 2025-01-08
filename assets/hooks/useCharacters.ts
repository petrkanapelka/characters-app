import axios from 'axios';
import { useState, useEffect } from 'react';

type Character = {
    id: string;
    name: string;
    image: string;
};

export const useCharacters = () => {
    const [characters, setCharacters] = useState<null | Character[]>(null);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then((res) => {
            setCharacters(res.data.results);
        });
    }, []);

    return characters;
};
