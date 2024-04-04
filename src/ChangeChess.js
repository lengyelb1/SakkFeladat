import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ChangeChess() {
    const params = useParams()
    const [chess, setChess] = useState([])
    const [isFetchPending, setIsFetchPending] = useState(false)
    useEffect(() => {
        setIsFetchPending(true)
        console.log(params.id)
        fetch(`http://localhost:3001/chess/${params.id}`)
        .then(response => response.json())
        .then(data => {
            setChess(data)
        })
        .finally(() => setIsFetchPending(false))
    },[])

    return (
        <div>
            <ul className="navbar bg-dark">
                <a className="navbar-Brand text-light" href='/'>Chess</a>
            </ul>
            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    fetch(`http://localhost:3001/chess/${params.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: event.target.name.value,
                            image_url: event.target.image_url.value,
                            profile_url: event.target.profile_url.value,
                            birth_date: event.target.birth_date.value,
                            world_ch_won: event.target.world_ch_won.value
                        })
                    })
                    .finally(() => window.location.replace('/'))
                }
            }>
                <input type="text" name="name" placeholder="Chess Name" defaultValue={chess.name}/>
                <input type="text" name="image_url" placeholder="Chess Image URL" defaultValue={chess.image_url}/>
                <input type="text" name="profile_url" placeholder="Chess Profile URL" defaultValue={chess.profile_url}/>
                <input type="date" name="birth_date" placeholder="Chess Birth Date" defaultValue={chess.birth_date}/>
                <input type="number" name="world_ch_won" placeholder="Chess World Champion Won" defaultValue={chess.world_ch_won}/>
                <input type="submit" value="Submit"/>
            </form>


        </div>
    )

}