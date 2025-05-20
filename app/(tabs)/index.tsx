import { SafeAreaView, StyleSheet, View } from 'react-native';

import Destination from '@/components/Destination';
import Flight from '@/components/Flight';
import HomeHeader from '@/components/HomeHeader';
import TripDuration from '@/components/TripDuration';

import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [activeDuration, setActiveDuration] = useState(0);

  return (
    <SafeAreaView>
      <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
        <HomeHeader />

        <TripDuration
          activeDuration={activeDuration}
          setActiveDuration={setActiveDuration}
        />

        <Flight activeDuration={activeDuration} />

        <Destination />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
