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
