import { useCharacters } from '@/assets/hooks/useCharacters'
import CharacterCard from '@/components/character-card/CharacterCard'
import React, { } from 'react'



export default function Characters() {

    const characters = useCharacters()

    return (
        <div>
            <h2>Characters</h2>
            <div>
                {characters && characters.map((character) => {
                    return <CharacterCard character={character} key={character.id} />
                })}
            </div>
        </div>
    )
}
