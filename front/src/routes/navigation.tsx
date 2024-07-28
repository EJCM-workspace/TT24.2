import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

export default function ZoeTrope() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}