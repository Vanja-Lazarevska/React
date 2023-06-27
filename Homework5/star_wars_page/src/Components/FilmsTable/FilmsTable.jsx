import { BsEmojiSmileUpsideDown} from "react-icons/bs";
import './FilmsTable.css'

export const FilmsTable = ({starWarsFilms}) => {
    return (
        <>
        {starWarsFilms.length != 0 ?
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Opening crawl</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release date</th>
                    </tr>
                </thead>
                <tbody>
                    {starWarsFilms.map((film) => (
                        <tr key={film.title}>
                            <td>{film.title}</td>
                            <td>{film.opening_crawl}</td>
                            <td>{film.director}</td>
                            <td>{film.producer}</td>
                            <td>{film.release_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table> : <><h1>Please wait...</h1> <BsEmojiSmileUpsideDown/></>}
        </>
    )
}