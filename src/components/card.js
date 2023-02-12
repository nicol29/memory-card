function Card (props) {

  return (
    <div className="card" data-index={props.index} onClick={props.handleClick}>
      <img src={props.image} alt={props.name}/>
      <div>{props.name}</div>
    </div>
  )
}

export default Card