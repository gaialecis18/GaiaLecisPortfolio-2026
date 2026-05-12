import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../../data';

function Header() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <Link to="/" className="brand-link">
          Gaia Lecis Portfolio
        </Link>
      </div>
      <nav className="site-nav">
        {navLinks.map((link) => {
          const isHashLink = link.path.includes('#');
          return isHashLink ? (
            <a key={link.path} href={link.path} className="nav-link">
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <a
        className="button button-primary"
        href="https://drive.google.com/file/d/1yctHK_nBZr-8EyLO6mMtpUU-vdqbvGmG/view?usp=sharing"
      >
        Resume
      </a>
    </header>
  );
}

export default Header;
