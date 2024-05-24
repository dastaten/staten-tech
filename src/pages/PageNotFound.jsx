import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      404: Page Not Found
      <br />
      <Link to="/">{`<- Go Home`}</Link>
    </div>
  );
}