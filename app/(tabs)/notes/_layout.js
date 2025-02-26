import { Stack } from 'expo-router';
//Notes Tab should have a Stack with Home Screen and Details Screen.
export default function NotesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Notes' }} />
      <Stack.Screen name="Settings" options={{ title: 'Settings' }} />
    </Stack>
  );
}
