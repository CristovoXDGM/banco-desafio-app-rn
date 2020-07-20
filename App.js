import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import Slider from '@react-native-community/slider';
export default function App() {

  const [valor, setValor] = useState(100);

  return (
    <View style={styles.container}>

      <Slider value={valor} minimumValue={0} onValueChange={(value) => setValor(value)} maximumValue={100} style={{ width: 200, height: 50 }} minimumTrackTintColor="green" maximumTrackTintColor="red" />
      <Text>{valor.toFixed(0)}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },

});


