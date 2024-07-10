<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DosageDashboard from './src/pages/DosageDashboard';
import MyProfile from './src/pages/PatientProfile';
import OtherMedication from './src/pages/ReportOtherMedications';
import RecentIllness from './src/pages/ReportRecentIllness';
import SideEffect from './src/pages/ReportSideEffects';
import TakeDose from './src/pages/TakeDose';
import UpdateINR from './src/pages/UpdateINR'; 

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DoseDash">
                <Stack.Screen name="DoseDash" component={DosageDashboard} options={{ headerShown: true }} />
                <Stack.Screen name="MyProf" component={MyProfile} options={{ headerShown: true }} />
                <Stack.Screen name="OtherMed" component={OtherMedication} options={{ headerShown: true }} />
                <Stack.Screen name="RecIll" component={RecentIllness} options={{ headerShown: true }} />
                <Stack.Screen name="SideEff" component={SideEffect} options={{ headerShown: true }} />
                <Stack.Screen name="TakeDose" component={TakeDose} options={{ headerShown: true }} />
                <Stack.Screen name="UpdINR" component={UpdateINR} options={{ headerShown: true }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
=======
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

>>>>>>> fbfab269d41d0712a35ca953795f513f02a147b8
