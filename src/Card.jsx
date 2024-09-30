import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
  return (
    <div className="card-product">
      <img src={props.imageUrl} alt={props.title} className="card-image"/>
      <div className="card-product-infos">
        <h3 className="card-location">
          <span className="location"><FontAwesomeIcon icon="location-dot" size="sm" className="location-dot"/>{props.location}</span>
          <a
            className="link"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer">
            View on Google Maps
            </a>
        </h3>
        <h1 className="card-title">{props.title}</h1>
        <h3 className="card-date">{props.startDate} - {props.endDate}</h3>
        <p>{props.description}</p>
      </div>
    </div>

  );
}
