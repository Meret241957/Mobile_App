import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/theme';

// Bottom tabs (Lab 4, Task 5.2)
const ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: 'home-outline',
  post: 'add-circle-outline',
  map: 'map-outline',
  profile: 'person-outline',
  settings: 'settings-outline',
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#FFFFFF',
        tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} color={color} size={size} />,
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="post" options={{ title: 'Post' }} />
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
