import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/home';
import Review from '../screens/review';


const screens = {
    Home: {
        screen: Home
    },
    Review: {
        screen: Review
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);