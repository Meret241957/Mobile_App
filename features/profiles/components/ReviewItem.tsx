import { Text, View } from 'react-native';
import { Review } from '../types';
import { RatingStars } from './RatingStars';

export function ReviewItem({ review }: { review: Review }) {
  return (
    <View className="mb-2 gap-1 rounded-xl border border-border bg-card p-3">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-text">{review.reviewerName}</Text>
        <RatingStars rating={review.stars} size={14} />
      </View>
      <Text className="text-text">{review.comment}</Text>
    </View>
  );
}