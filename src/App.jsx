import './App.css'
import Header from "./Header"
import Card from "./Card"
import cardData from './cardData'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faEarthAmericas, faLocationDot)

export default function App() {
  const cardElements = cardData.map((card, index) => (
    <div key={card.title}>
      <Card
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imageUrl={card.imageUrl}
      />
      {index < cardData.length - 1 && <hr className="divider" />}
    </div>
  ));

  return (
    <>
      <Header />
      {cardElements}
    </>
  );
}

// header
// card
//
