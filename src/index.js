import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

const MOUSE_CLICK = 'MOUSE_CLICK';

function createMouseClickAction(evt) {
  return {
    type: MOUSE_CLICK,
    payload: {
      time: new Date().toISOString(),
      clientX: evt.clientX,
      clientY: evt.clientY
    }
  };
}

function reducer(state = [], action = undefined) {
  if (typeof action === 'object' && action.type === MOUSE_CLICK) {
    const newState = [...state];
    newState.push(action.payload);
    return newState;
  }
  return state;
}

const itemToString = (item) =>
  `time:${item.time}, x: ${item.clientX}, y: ${item.clientY}`;

const View = ({label}) => {
  const state = ReactRedux.useSelector((state) => state);

  return (
    <ul>
      {state.length <= 0 ? (
        <li>{label}</li>
      ) : (
        state.map((item) => <li key={item.time}>{itemToString(item)}</li>)
      )}
    </ul>
  );
};

const App = () => {
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(() => {
    const handleClick = (evt) => {
      dispatch(createMouseClickAction(evt));
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="container">
      <View label="left" />
      <View label="right" />
    </div>
  );
};

const store = Redux.createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById('root'));
