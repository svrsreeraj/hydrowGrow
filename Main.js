import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Main() {
  return (
    <View style={styles.container}>
      <Button title="PPM Calculator" onPress={() => { Actions.npmCalculator(); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
