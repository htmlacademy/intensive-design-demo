import {Fragment} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';

/*
  Ещё одна важная практически тема - настраиваемые пути
  или пути с параметрами. Полезно, когда нам нужно показать
  один и тот же компонент с небольшими нюансами.
  Например, страница фильма на сайте "Что посмотреть?"
  или страница объявления в "6 городов" одинаковы (визуально)
  для всех фильмов и объявлений соответственно. Меняется только id

  React Router может здесь помочь. Если в path указать часть пути
  между слешами с двоеточием (например ":year"),
  то в адресной строке для такого пути может быть что угодно.
  Попробуйте в браузере справа перейти по адресу
  /about/любое_слово_или_число

  А куда денется "year"? Этот параметр попадёт в служебные
  пропсы. Получить их мы можем с помощью хука useParams.
  А потом, например если это будет id фильма в "Что посмотреть?",
  достать из хранилища нужные данные и показать посетителю
*/

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about/:year' element={<About />} />
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
