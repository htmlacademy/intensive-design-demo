import {Fragment} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';

/*
  Кстати, на прошлом шаге мы потеряли просто страницу "/about",
  потому что такого адреса больше нет, а есть "/about/:year".
  Чтобы этого не происходило, сделаем роут с параметром вложенным.
*/

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} >
            <Route path=':year' element={<About />} />
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
