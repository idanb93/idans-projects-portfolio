function Card({title, capabilities, tools}) {

    return (
        <div className='card'>
            <div className='card-icon'></div>
            <div className='card-title'>
                <h2>{title}</h2></div>
            <div className='card-body'>
                {capabilities.map((capability) => {
                    return (
                        <li className="tool">{capability}</li>
                    )
                })}
            </div>
            <h4>{title} Tools:</h4>
            <div className='card-technologies'>
                {tools.map((tool) => {
                    return (
                        <li className="tool">{tool}</li>
                    )
                })}
            </div>
        </div>

    )
}

export default Card;