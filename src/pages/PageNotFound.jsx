import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='p-10 text-default'>
      404: Page Not Found
      <br />
      <Link to="/">{`<- Go Home`}</Link>
    </div>
  );
}