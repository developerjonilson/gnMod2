import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Respositories from '~/pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Respositories,
  }),
);

export default Routes;
