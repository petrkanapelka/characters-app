import { useCharacters } from '@/assets/hooks/useCharacters'
import Image from 'next/image'
import React, { } from 'react'



export default function Characters() {

    const characters = useCharacters()

    return (
        <div>
            <h2>Characters</h2>
            <div>
                {characters && characters.map((character) => {
                    return <div key={character.id}>
                        <div >{character.name}</div>
                        <Image
                            src={character.image}
                            alt={`Picture of ${character.name}`}
                            width={200}
                            height={200}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}
