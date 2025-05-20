import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from '../constants/Colors';
import DESTINATIONS from '../data/DESTINATIONS';

const Destination = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          Where are you going?
        </Text>
        <TouchableOpacity>
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {DESTINATIONS.map((destination, index) => (
          <TouchableOpacity
            key={`destination-${destination.id || index}`}
            style={styles.item}
          >
            <View style={styles.imageContainer}>
              {destination.image ? (
                <Image
                  source={destination.image}
                  resizeMode="contain"
                  style={styles.image}
                />
              ) : (
                <View style={[styles.image, styles.placeholderImage]}>
                  <Ionicons name="image-outline" size={24} />
                </View>
              )}
            </View>
            <Text style={[styles.text, { color: theme.text }]}>
              {destination.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
export default Destination;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  showAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  scrollView: {
    marginVertical: 20,
  },
  item: {
    marginRight: 30,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    minWidth: 80,
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 10,
    marginTop: 10,
  },
  placeholderImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
