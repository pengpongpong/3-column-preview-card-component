import "./Card.css";

function Card({type, description, svg, background_color}) {
    return (
        <section className="preview" style={{backgroundColor: background_color}}>
            <img src={svg} alt={type}></img>
            <h1>{type}</h1>
            <p>{description}</p>
            <button style= {{color: background_color}}>Learn More</button>
        </section>
    );
}

export default Card;