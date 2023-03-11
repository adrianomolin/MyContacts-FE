import { useTransition, animated } from 'react-spring';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '100%', maxWidth: '500px',
    },
    enter: {
      opacity: 1, transform: 'translateY(0)', position: 'absolute', width: '100%', maxWidth: '500px',
    },
    leave: {
      opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '100%', maxWidth: '500px',
    },
    // position absolute fará com que os elementos se sobreponham
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={NewContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </animated.div>
  ));
}
