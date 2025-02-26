import { Stack } from 'expo-router';
//Profile Tab should have a Stack with Profile Screen and Settings Screen.
export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
    </Stack>
  );
}
