import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Property } from '../types';
import { colors } from '@/shared/theme';

type Props = {
  property: Property;
  onPress?: () => void;
  favourite?: boolean;
  onToggle?: () => void;
};

export function PropertyCard({ property, onPress, favourite, onToggle }: Props) {
  const place = property.compound !== '' ? `${property.compound}, ${property.location}` : property.location;
  const price = `EGP ${property.price.toLocaleString()}${property.type === 'rent' ? ' / month' : ''}`;

  return (
    <Pressable
      onPress={onPress}
      className="mb-3 flex-row items-center gap-3 rounded-xl border border-border bg-card p-3 active:opacity-70"
      accessibilityRole="button"
      accessibilityLabel={`${property.title}, ${place}, ${price}`}
    >
      <View className="h-16 w-16 items-center justify-center rounded-xl bg-secondary">
        <Text className="text-3xl">{property.emoji}</Text>
      </View>

      <View className="flex-1">
        <Text className="font-bold text-text" numberOfLines={1}>{property.title}</Text>
        <Text className="text-[13px] text-muted" numberOfLines={1}>{place}</Text>
        <Text className="text-[13px] text-muted">{property.rooms} rooms · {property.area} m²</Text>
        <Text className="mt-1 font-bold text-primary">{price}</Text>
      </View>

      {onToggle && (
        <Pressable
          onPress={onToggle}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel={favourite ? 'Remove from favourites' : 'Add to favourites'}
        >
          <Ionicons name={favourite ? 'heart' : 'heart-outline'} size={24} color={colors.danger} />
        </Pressable>
      )}
    </Pressable>
  );
}