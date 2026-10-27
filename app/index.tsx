import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/shared/components/Button';

// TEMPORARY entry screen until Login is built.
// replace() so Back can't return here (Lab 3, Ex 09).
export default function Index() {
  return (
    <View className="flex-1 justify-center gap-3 bg-bg p-6">
      <Text className="mb-4 text-center text-3xl font-bold text-primary">Smart Property Finder</Text>
      <Button title="Enter as User" onPress={() => router.replace('/user')} />
      <Button title="Enter as Advertiser" onPress={() => router.replace('/advertiser')} />
    </View>
  );
}
