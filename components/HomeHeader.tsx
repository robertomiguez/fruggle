import { Asset } from 'expo-asset';
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const avatarAsset = Asset.fromModule(require('../data/images/avatar.png'));

const HomeHeader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Discover</Text>
        <Image style={styles.avatar} source={{ uri: avatarAsset.uri }} />
      </View>
    </>
  );
};
export default HomeHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
