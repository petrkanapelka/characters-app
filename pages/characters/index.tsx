import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Character = {
    id: string
    name: string
    image: string
}

export default function Characters() {
    const [characters, setCharacters] = useState<null | Character[]>(null)
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setCharacters(res.data.results)
            })
    }, [])
    return (
        <div>
            <h2>CHARACTERS</h2>
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
