import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAppStore } from '../src/store/app-store';
import * as cryptoInit from '../src/core/crypto';

export default function RootLayout() {
  useEffect(() => {
    useAppStore.getState().loadSettings();
    cryptoInit.init();
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0f0f1a' },
          headerTintColor: '#e0e0e0',
          contentStyle: { backgroundColor: '#0f0f1a' },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: 'Solvx Remote' }}
        />
        <Stack.Screen
          name="settings"
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="remote/[id]"
          options={{
            title: 'Remote Session',
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
