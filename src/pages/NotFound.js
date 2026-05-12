import { Link } from 'react-router-dom';
import RichText from '../components/common/RichText';

function NotFound() {
  return (
    <div className="page-shell not-found-page">
      <h1>Page not found</h1>
      <RichText as="p">The page you’re looking for **does not exist** or may have moved.</RichText>
      <Link className="button button-primary" to="/">
        Return home
      </Link>
    </div>
  );
}

export default NotFound;
