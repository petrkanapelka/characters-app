import React, { useEffect, useState } from 'react'

type Character = {
    id: string
    name: string
    image: string
}

export default function Characters() {
    const [characters, setCharacters] = useState<null | Character[]>(null)
    useEffect(() => {
        setCharacters(null)
    }, [])
    return (
        <div>
            <h2>CHARACTERS</h2>
            <div>
                {characters && characters.map((character) => {
                    return <span key={character.id}>{character.name}</span>
                })}
            </div>
        </div>
    )
}
