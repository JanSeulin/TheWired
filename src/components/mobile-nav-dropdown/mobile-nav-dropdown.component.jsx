import { Link } from 'react-router-dom';

import './mobile-nav-dropdown.styles.scss';

const MobileNavDropdown = ({ navStatus, setNavStatus }) => {
  const handleNavStatus = () => {
    setNavStatus(false);
  };
  return (
    <div className="nav-dropdown-container">
      <div className="mobile-nav-links">
        <Link className="mobile-option" to="/shop" onClick={handleNavStatus}>
          Shop
        </Link>
        <Link className="mobile-option" to="/contact" onClick={handleNavStatus}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNavDropdown;
