import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Main() {
  return (
    <View style={styles.container}>
      <Button containerStyle={{marginBottom:10}} title="PPM Calculator" onPress={() => { Actions.npmCalculator(); }} />

      <Button containerStyle={{marginBottom:10}} title="Substance Manager" onPress={() => { Actions.substanceManager(); }} />
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
