import React, {useState} from 'react';
import List from '../list/list';
import Map from '../map/map';
import {City, Points, Point} from '../../types/types';

type AppProps = {
  city: City;
  points: Points;
};

function App(props: AppProps): JSX.Element {
  const {city, points} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) => point.title === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Парки города {city.title}:</h1>
      </header>
      <main>
        <List points={points} onListItemHover={handleListItemHover} />
        <Map city={city} points={points} selectedPoint={selectedPoint} />
      </main>
    </React.Fragment>
  );
}

export default App;
