import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Waves from './Waves';
import Levenshtein from './Levenshtein';

const Stack = createStackNavigator();

export default function Paginas() {

    return (
        <Stack.Navigator initialRouteName={'Waves'} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Waves" component={Waves} />
            <Stack.Screen name="Levenshtein" component={Levenshtein} />
        </Stack.Navigator>

    );
}