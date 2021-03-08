import './Card_button.sass'

export default function Card_button(props) {
    return (
        <div className="card__buttons">
          <button className="card__btn btn">{props.text}</button>  
        </div>
    )
}
