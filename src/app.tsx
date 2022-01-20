import {Fragment} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';
import Secret from './pages/secret';

/*
  Решается проблема с помощью индексного элемента.
  Теперь по адресу /about будет открываться обычная страница About.
  Если адрес /about/secret, то будет показана страница Secret,
  а если указан какой-то другой параметр, то снова откроется About,
  но уже с параметром в консоли.
*/


function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about'>
            <Route index element={<About />} />
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
