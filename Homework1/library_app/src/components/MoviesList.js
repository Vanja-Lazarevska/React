import './components.css'

const MovieList = () => {

    const movies = ['Gone Girl', 'The Silence of the Lambs', 'Prisoners', 'Shutter Island', 'Seven', 'The girl with the dragon tattoo', 'Black Swan', 'Memento', 'The Mechanist', 'The girl in the train']
    const welcomeMessage = <h1>Welcome to our movies site recomendation</h1>
    return(
        <>
        <div>{welcomeMessage}</div>
        <h3>Here are our top 10 best thriler/drama choices:</h3>
        <ol className="unorderedList">
            {movies.map((movie)=> {
                return(<li key={movie} className='listItems'>Movie name: {movie}</li>)
            })}
        </ol>
        </>

        

    )
}

export default MovieList