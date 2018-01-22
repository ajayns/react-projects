import { StackNavigator } from 'react-navigation';
import SearchPage from './screens/SearchPage';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
});
