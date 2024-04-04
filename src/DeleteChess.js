import { useParams } from "react-router-dom";

export default function DeleteChess() {
    const params = useParams()
    return (
        <div>
            <ul className="navbar bg-dark">
                <a className="navbar-Brand text-light" href='/'>Chess</a>
                <a className="navbar-link text-light" href='newChess'>New Chess</a>
            </ul>
            <h1>Are you sure you want to delete this chess player?</h1>
            <form onSubmit={(event) => { event.preventDefault(); fetch('http://localhost:3001/chess/' + params.id, { method: 'DELETE' }).then(response => response.json()).then(data => { console.log(data) }).finally(() => window.location.replace('/'))}}>
                <input type="submit" className="btn btn-danger" value="Sure" />
                <a href='/' className="btn btn-dark">Cancel</a>
            </form>

        </div>
    )
}