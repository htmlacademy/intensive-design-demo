import {Fragment} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';
import Secret from './pages/secret';

/*
  С "/about" мы разобрались, но что делать, если у нас
  может быть страница второго уровня с постоянным адресом?
  Например, "/about/secret". Да, ситуация крайне редкая.
  Сейчас React Router считает Secret частью страницы About,
  а не отдельной страницей "/about/secret".
  Решим эту проблему в следующем шаге...
*/


function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} >
            <Route path=':year' element={<About />} />
            <Route path='secret' element={<Secret />} />
          </Route>
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
