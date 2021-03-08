import './Card.sass'

export default function Card(props) {
    return (
            <ul className="card__list">
                <li className="card__wrap"><img src={props.img} alt="card" className="card__img"/></li>
                <li className="card__name">{props.name}</li>
                <li className="card__text">{props.text}</li>
                <li className="card__price">{props.price}</li>
            </ul>
    )
}
