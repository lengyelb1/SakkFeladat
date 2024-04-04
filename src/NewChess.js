export default function NewChess (params) {
    return (
        <div>
            <ul className="navbar bg-dark">
                <a className="navbar-Brand text-light" href='/'>Chess</a>
            </ul>
            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    fetch('http://localhost:3001/chess', {
                        method: 'POST',
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
                <input type="text" name="name" placeholder="Chess Name"/>
                <input type="text" name="image_url" placeholder="Chess Image URL"/>
                <input type="text" name="profile_url" placeholder="Chess Profile URL"/>
                <input type="date" name="birth_date" placeholder="Chess Birth Date"/>
                <input type="number" name="world_ch_won" placeholder="Chess World Champion Won"/>
                <input type="submit" value="Submit"/>
            </form>


        </div>
    )
}