import RichText from '../common/RichText';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-copy">
        <RichText as="p" className="footer-text">© 2026 **Gaia Lecis**. Crafted with precision.</RichText>
      </div>
      <div className="footer-links">
        <a className="footer-link" href="https://www.linkedin.com/in/gaialecis" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="footer-link" href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="footer-link" href="mailto:gaialecis@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
