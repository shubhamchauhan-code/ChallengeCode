import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApprovedFoodList from '../Containers/ApprovedFoodList';
import LaunchScreen from '../Containers/LaunchScreen';

const MainStack = createStackNavigator();

class AppNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="LaunchScreen">
                    <MainStack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
                    <MainStack.Screen name="ApprovedFoodList" component={ApprovedFoodList} options={{ headerShown: false }} />
                </MainStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigation;