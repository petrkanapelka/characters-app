import { Character } from '@/assets/types/types';
import Image from 'next/image';
import React from 'react';
type CharacterCardType = {
    character: Character
}
const CharacterCard = (props: CharacterCardType) => {
    const { character } = props
    return (
        <div >
            <div >{character.name}</div>
            <Image
                src={character.image}
                alt={`Picture of ${character.name}`}
                width={200}
                height={200}
            />
        </div>
    );
};

export default CharacterCard;