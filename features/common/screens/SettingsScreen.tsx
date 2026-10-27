import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/shared/components/Button';

export default function SettingsScreen() {
  return (
    <View className="flex-1 justify-center gap-3 bg-bg p-6">
      <Text className="mb-4 text-center text-2xl font-bold text-primary">Settings</Text>
      <Button title="Log out" variant="danger" onPress={() => router.replace('/')} />
    </View>
  );
}
