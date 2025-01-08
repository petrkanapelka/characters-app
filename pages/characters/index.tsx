import { useCharacters } from '@/assets/hooks/useCharacters'
import CharacterCard from '@/components/character-card/CharacterCard'
import MetaHead from '@/components/meta-head/MetaHead'
import Navbar from '@/components/navbar/Navbar'
import React, { } from 'react'



export default function Characters() {

    const characters = useCharacters()

    return (
        <>
            <MetaHead title="Characters" />
            <Navbar />
            <div>
                <h2>Characters</h2>
                <div>
                    {characters && characters.map((character) => {
                        return <CharacterCard character={character} key={character.id} />
                    })}
                </div>
            </div>
        </>
    )
}
