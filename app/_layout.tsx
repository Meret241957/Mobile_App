import '../global.css';
import { Stack } from 'expo-router';
import { colors } from '@/shared/theme';

// Root Stack (Lab 4, Task 5.3). The two tab groups live inside it.
const header = { headerStyle: { backgroundColor: colors.primary }, headerTintColor: '#FFFFFF' };

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ ...header, title: 'Sign up' }} />
      <Stack.Screen name="user" options={{ headerShown: false }} />
      <Stack.Screen name="advertiser" options={{ headerShown: false }} />
      <Stack.Screen name="rent" options={{ ...header, title: 'For Rent' }} />
      <Stack.Screen name="buy" options={{ ...header, title: 'For Sale' }} />
      <Stack.Screen name="advertiser-profile/[id]" options={{ ...header, title: 'Advertiser' }} />
      <Stack.Screen name="user-profile/[id]" options={{ ...header, title: 'User' }} />
    </Stack>
  );
}
