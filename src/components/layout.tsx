import {Fragment} from 'react';
import {Link, Outlet} from 'react-router-dom';

function Layout (): JSX.Element {
  return (
    <Fragment>
      <header>
        <h1>Alexander Supertramp</h1>
        <nav>
          <Link to='/' title='/'>
            Main
          </Link>{' '}
          &bull;{' '}
          <Link to='/about' title='/about'>
            About
          </Link>{' '}
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </Fragment>);
}

export default Layout;
