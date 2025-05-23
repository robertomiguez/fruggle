import { Colors } from '@/constants/Colors';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Explore = () => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const theme = Colors[(colorScheme as 'light' | 'dark') || 'light'];

  return (
    <SafeAreaView>
      <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
        <Text style={[styles.title, { color: theme.text }]}>Explore</Text>
      </View>
    </SafeAreaView>
  );
};
export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
