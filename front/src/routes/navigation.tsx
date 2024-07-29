import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ChatPage from "../pages/Chat";

const Stack = createNativeStackNavigator();

export default function ZoeTrope() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Chat" component={ChatPage}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}