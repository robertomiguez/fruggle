import { Colors } from '@/constants/Colors';
import type Flight from '@/types/flight';
import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

interface FlightDetailScreenProps {
  flight: Flight;
  onClose: () => void;
}

const FlightDetailScreen = ({ flight, onClose }: FlightDetailScreenProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  const styles = createStyles(theme, colorScheme || 'light');
  const errorStyles = createErrorStyles(theme);

  if (!flight) {
    return (
      <View style={errorStyles.container}>
        <Text style={errorStyles.errorText}>Flight data not available</Text>
        <TouchableOpacity style={errorStyles.backButton} onPress={onClose}>
          <Text style={errorStyles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={flight.image} style={styles.headerImage}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onClose}>
              <Ionicons name="close" color={Colors.primary} size={24} />
            </TouchableOpacity>
            <View style={styles.rightHeaderContent}>
              <TouchableOpacity style={styles.favoriteButton}>
                <Ionicons
                  name="heart-outline"
                  color={Colors.primary}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{flight.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{flight.price}</Text>
              <Text style={styles.pricePerPersonText}>/person</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity style={styles.activeTab}>
                <Text style={styles.activeTabText}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inactiveTab}>
                <Text style={styles.inactiveTabText}>Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <View style={styles.infoIcon}>
                  <Ionicons name="time" size={24} color={Colors.primary} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Duration</Text>
                  <Text style={styles.infoValue}>{flight.duration}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <View style={styles.infoIcon}>
                  <Ionicons name="star" size={24} color={Colors.primary} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Rating</Text>
                  <Text style={styles.infoValue}>{flight.rating} out of 5</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.description}>{flight.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bookButtonContainer}>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>View</Text>
          <Ionicons name="arrow-forward" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (theme: any, colorScheme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerImage: {
      width: '100%',
      height: 300,
      borderRadius: 15,
      overflow: 'hidden',
      marginBottom: 10,
    },
    headerContainer: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: '100%',
    },
    backButton: {
      backgroundColor: Colors.white,
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightHeaderContent: {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 40,
    },
    favoriteButton: {
      backgroundColor: Colors.white,
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      padding: 15,
      backgroundColor: theme.background,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.text,
      flex: 1,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    priceText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
    pricePerPersonText: {
      color: theme.text,
    },
    detailsContainer: {
      marginVertical: 15,
    },
    tabsContainer: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    activeTab: {
      paddingVertical: 10,
      marginRight: 15,
    },
    activeTabText: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: 16,
    },
    inactiveTab: {
      paddingVertical: 10,
      marginRight: 15,
    },
    inactiveTabText: {
      color: theme.text,
    },
    infoContainer: {
      marginBottom: 15,
      flexDirection: 'row',
    },
    infoItem: {
      flexDirection: 'row',
      marginRight: 15,
    },
    infoIcon: {
      backgroundColor: theme.background,
      shadowColor: colorScheme === 'dark' ? '#000' : theme.background,
      shadowOffset: { width: 3, height: 5 },
      shadowRadius: 3,
      shadowOpacity: 0.1,
      elevation: 2,
      padding: 5,
      borderRadius: 5,
      marginRight: 8,
      borderWidth: colorScheme === 'dark' ? 1 : 0,
      borderColor: colorScheme === 'dark' ? '#333' : 'transparent',
    },
    infoTextContainer: {
      justifyContent: 'center',
    },
    infoLabel: {
      fontSize: 10,
      marginBottom: 3,
      textTransform: 'uppercase',
      color: colorScheme === 'dark' ? '#aaa' : '#888',
    },
    infoValue: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
    },
    description: {
      color: theme.text,
      lineHeight: 22,
    },
    bookButtonContainer: {
      padding: 15,
      backgroundColor: theme.background,
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 5,
    },
    bookButton: {
      backgroundColor: Colors.primary,
      padding: 12,
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bookButtonText: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
  });

const createErrorStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: theme.text,
      fontSize: 16,
      textAlign: 'center',
    },
    backButton: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 20,
    },
    backButtonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default FlightDetailScreen;
