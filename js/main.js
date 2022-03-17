const MOUSE_CLICK = 'MOUSE_CLICK';

function createMouseClickAction(evt) {
  return {
    type: MOUSE_CLICK,
    payload: {
      time: new Date().toISOString(),
      clientX: evt.clientX,
      clientY: evt.clientY,
    }
  };
}

function reducer(state=[], action=undefined){
  if(typeof action === 'object' && action.type === MOUSE_CLICK){
    const newState = [...state];
    newState.push(action.payload);
    return newState;
  }
  return state;
}


const store = Redux.createStore(reducer);

function createView(element){
  store.subscribe(()=>{
    element.innerHTML = '';
    const state = store.getState();
    state.forEach((e)=>{
      const li = document.createElement('li');
      li.innerText = `time: ${e.time}, x: ${e.clientX}, y: ${e.clientY}`;
      element.appendChild(li);
    });
  });
}

createView(document.querySelector('#left'));
createView(document.querySelector('#right'));

document.addEventListener('click',(evt)=>{
  store.dispatch(createMouseClickAction(evt));
});
