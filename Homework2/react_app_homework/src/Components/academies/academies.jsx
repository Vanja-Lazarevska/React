import './academies.css'
import Academy from './academyComponent'

const Academies = (props) => {


    return(
        <>
            <h2>{props.name}</h2>
            <div>
                <Academy name= {props.arrayOfAcademies[0].name} description= {props.arrayOfAcademies[0].description} />
            </div>


        </>
    )


}

export default Academies