import { Text, View } from 'react-native';

type Props = { name: string; size?: 'sm' | 'lg' };

export function Avatar({ name, size = 'sm' }: Props) {
  const letter = name.trim() === '' ? '?' : name.trim()[0].toUpperCase();

  return (
    <View
      className={`items-center justify-center rounded-full border-2 border-accent bg-primary ${size === 'lg' ? 'h-20 w-20' : 'h-12 w-12'}`}
      accessibilityLabel={`${name} avatar`}
    >
      <Text className={`font-bold text-white ${size === 'lg' ? 'text-3xl' : 'text-lg'}`}>{letter}</Text>
    </View>
  );
}