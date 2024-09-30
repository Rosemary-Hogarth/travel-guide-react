import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <header className='header'>
      <FontAwesomeIcon icon="earth-americas"  size="lg" className="earth-americas"/>
      <h3 className="header-text">my travel journal.</h3>
    </header>
  )
}
