import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ZoeTrope from './src/routes/navigation';

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar/>

            <SafeAreaView style={{flex: 1}}>
                <ZoeTrope/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}