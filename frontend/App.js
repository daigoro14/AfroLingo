import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPassScreen from './screens/ForgotPassScreen';
import CountryScreen from './screens/CountryScreen';
import LanguageScreen from './screens/LanguageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Country" component={CountryScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />   
        <Stack.Screen name="Login" component={LoginScreen} />    
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
