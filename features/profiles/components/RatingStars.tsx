import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/shared/theme';

type Props = { rating: number; size?: number };

const STARS = [1, 2, 3, 4, 5];

export function RatingStars({ rating, size = 16 }: Props) {
  const rounded = Math.round(rating);

  return (
    <View className="flex-row gap-0.5" accessibilityLabel={`Rated ${rating.toFixed(1)} out of 5`}>
      {STARS.map((star) => (
        <Ionicons key={star} name={star <= rounded ? 'star' : 'star-outline'} size={size} color={colors.accent} />
      ))}
    </View>
  );
}