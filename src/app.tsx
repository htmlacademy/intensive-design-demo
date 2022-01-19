import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';

/*
  ОПИСАНИЕ:
  используя компоненты BrowserRouter, Route
  и Routes из пакета react-router-dom,
  мы можем добавить в приложение постраничную
  навигацию. Ну ещё Link и Outlet, пример их использования
  посмотрите в components/layout.jsx
*/

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
