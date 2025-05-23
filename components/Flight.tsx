import FlightDetailScreen from '@/app/modals/FlightDetailScreen';
import { Colors } from '@/constants/Colors';
import DURATIONS from '@/data/DURATIONS';
import type Flight from '@/types/flight';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type FlightProps = {
  activeDuration: number;
};

const WIDTH = Dimensions.get('screen').width;

const FlightScreen = ({ activeDuration }: FlightProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<Flight>();

  const handleFlightPress = (flight: Flight) => {
    setSelectedFlight(flight);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* <Text style={styles.countText}>
              {DURATIONS[activeDuration].flights.length + " "}
              {DURATIONS[activeDuration].title}
            </Text> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH * 0.7}
        decelerationRate="fast"
        pagingEnabled
        style={styles.scrollView}
      >
        {DURATIONS[activeDuration].flights.map((flight, index) => (
          <TouchableOpacity
            style={styles.card}
            key={`flight-${index}`}
            onPress={() => handleFlightPress(flight)}
          >
            <View style={styles.overlay}>
              <TouchableOpacity
                style={styles.heartbutton}
                onPress={(e) => {
                  // Stop propagation to prevent modal from opening
                  e.stopPropagation();
                }}
              >
                <Ionicons
                  name="heart-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{flight.title}</Text>
            </View>
            <Image source={flight.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        {selectedFlight && (
          <FlightDetailScreen
            flight={selectedFlight}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </>
  );
};

export default FlightScreen;

const styles = StyleSheet.create({
  countText: {
    fontSize: 17,
    color: Colors.dark.text,
  },
  scrollView: {
    marginVertical: 20,
  },
  card: {
    width: WIDTH * 0.7,
    height: WIDTH * 0.9,
    overflow: 'hidden',
    borderRadius: 20,
    marginRight: 20,
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartbutton: {
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
