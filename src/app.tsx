import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Main from './pages/main';
import About from './pages/about';
import Secret from './pages/secret';
import Error from './error';
import GoAway from './pages/go-away';

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about'>
            <Route index element={<About />} />
            <Route path='secret' element={<Secret />} />
          </Route>
          <Route path='go-away' element={<GoAway />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
