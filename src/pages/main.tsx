import {Fragment} from 'react';

type MainProps = {
  [key: string]: string | boolean;
}

function Main(props: MainProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log(props);

  return (
    <Fragment>
      <p>Welcome to my homepage.</p>
      <p>Alaska rocks!</p>
    </Fragment>
  );
}

export default Main;
