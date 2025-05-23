import { ImageSourcePropType } from 'react-native';

export default interface Flight {
  id: number;
  title: string;
  image: ImageSourcePropType;
  price: string;
  duration: string;
  rating: number;
  description: string;
}
