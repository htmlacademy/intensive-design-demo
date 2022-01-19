import {Fragment} from 'react';

function About(): JSX.Element {
  return (
    <Fragment>
      <p>
        American hiker who sought an increasingly itinerant lifestyle as he grew
        up.
      </p>
      <dl>
        <dt>Born</dt>
        <dd>
          Christopher Johnson McCandless
          <br />
          February 12, 1968
          <br />
          El Segundo, California, U.S.
        </dd>
        <dt>Died</dt>
        <dd>
          c. August 1992 (aged 24)
          <br />
          Stampede Trail, Alaska, U.S.
        </dd>
      </dl>
    </Fragment>
  );
}

export default About;
