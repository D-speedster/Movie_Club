import React from 'react'
import { useParams } from 'react-router-dom'
export default function Movo() {
    let { userId } = useParams();
    console.log(userId)
    return (
        <div>
            <h1>{userId} : Movies</h1>
        </div>
    )
}
