const Card = (props) => {
  return (
    <div className="card">
      <div className="card-icon"></div>
      <div className="card-title">
        <h2>{props.cardInfos.title}</h2>
      </div>
      <div className="card-body">
        {props.cardInfos.capabilities.map((capability) => (
          <li key={props.cardInfos.id} className="tool">
            {capability}
          </li>
        ))}
      </div>
      <p className="technologies-and-tools">
        <b>Technologies and Tools:</b>
      </p>
      <div className="card-technologies">
        {props.cardInfos.tools.map((tool) => (
          <li key={props.cardInfos.id} className="tool">
            {tool}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Card
