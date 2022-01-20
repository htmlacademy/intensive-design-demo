import {Fragment} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';

/*
  Настроим ещё один роут, который должен сработать,
  если ни один другой роут не подошёл. Иными словами,
  настроим показ 404 страницы.
  Обратите внимание, что у Route для страницы 404
  мы указали path *, а в element передали JSX-код.
*/

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path="*" element={
          <Fragment>
            <h1>
              404.
              <br />
              <small>Page not found</small>
            </h1>
            <Link to="/">Go to main page</Link>
          </Fragment>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
