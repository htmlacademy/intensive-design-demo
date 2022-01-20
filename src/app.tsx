import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';

/*
  Теперь рассмотрим, как передать
  пропсы в компонент, который передан в element.
  Короткий ответ - как в любой другой!
  О том, как работать со служебными попсами,
  мы поговорим в 4 шаге.
*/

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main firstProp='test' secondProp />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
