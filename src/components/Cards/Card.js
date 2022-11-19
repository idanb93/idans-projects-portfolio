const Card = (props) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2 style={{ fontFamily: "Inter, sans-serif" }}>
          {props.cardInfos.title}
        </h2>
      </div>
      <div className="card-body">
        {props.cardInfos.capabilities.map((capability) => (
          <li key={props.cardInfos.id} className="capability">
            {capability}
            <br />
            <br />
          </li>
        ))}
      </div>
      <p className="technologies-and-tools">
        <b style={{ fontFamily: "Inter, sans-serif" }}>
          Technologies and Tools:
        </b>
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
