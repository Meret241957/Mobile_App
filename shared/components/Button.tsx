import { Pressable, Text } from 'react-native';

// From Lab 4, Part 3
type Props = { title: string; onPress: () => void; variant?: 'primary' | 'danger' };

export function Button({ title, onPress, variant = 'primary' }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center rounded-xl px-4 py-3 active:opacity-70 ${variant === 'danger' ? 'bg-danger' : 'bg-primary'}`}
    >
      <Text className="font-semibold text-white">{title}</Text>
    </Pressable>
  );
}
