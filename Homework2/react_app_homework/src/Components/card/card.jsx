import '../card/card.css'
const Card = (props) => {

    return (

        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <img src={props.src} alt="" width={500} height={500}/>
        </div>

    )
}

export default Card