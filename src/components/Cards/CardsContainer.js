import { cards } from "../../constants/cards"
import Card from "./Card"

const CardsContainer = () => {
  return (
    <div id="cards-conatiner">
      <div id="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            cardInfos={{
              title: card.title,
              capabilities: card.capabilities,
              tools: card.tools,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsContainer
