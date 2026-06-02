import { Link } from 'react-router-dom';
import AddtoCart from './AddtoCart'
const Header = () => {
  return (

    <div>

  <nav className="navbar">
    <div className="logo">ShopLogo</div>

    <ul className="nav-links">
      <Link to= "/">Home</Link>
     
     
    </ul>
     <AddtoCart/>
  </nav>
 
</div>
  )
}

export default Header