import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ToDoList from './Screens/ToDoList';

export default function App() {

  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='home' component={HomeScreen} options={{ title: "Home" }} />
        <stack.Screen name='todo' component={ToDoList} options={{ title: "To Do App" }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
