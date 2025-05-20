import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import { Colors } from '../constants/Colors';
import DURATIONS from '../data/DURATIONS';

type TripDurationProps = {
  activeDuration: number;
  setActiveDuration: (duration: number) => void;
};

const TripDuration = ({
  activeDuration,
  setActiveDuration,
}: TripDurationProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  return (
    <>
      <Text style={[styles.title, { color: theme.text }]}>Trip duration?</Text>

      <ScrollView style={styles.scrollView} horizontal>
        {DURATIONS.map((duration, index) => (
          <TouchableOpacity
            onPress={() => setActiveDuration(index)}
            style={styles.button}
            key={duration.id}
          >
            <Text
              style={[
                styles.text,
                { color: theme.text },
                activeDuration === index && { color: Colors.primary },
              ]}
            >
              {duration.title}
            </Text>
            {activeDuration === index && <View style={styles.bullet} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};
export default TripDuration;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scrollView: {
    marginVertical: 20,
  },
  button: {
    marginRight: 10,
    paddingVertical: 0,
    paddingHorizontal: 9,
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
  },
});
