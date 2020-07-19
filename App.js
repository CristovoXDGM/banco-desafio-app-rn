import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';

export default function App() {

  const [pizza, setPizza] = useState(0);

  const flavorsPizza = [
    { key: 0, nome: "Calabresa", valor: 35.90 },
    { key: 1, nome: "Frango", valor: 32.90 },
    { key: 2, nome: "4Queijos", valor: 30.90 },
  ];

  const [pizzas, setPizzas] = useState(flavorsPizza);

  let pizzasItem = pizzas.map((res, key) => {
    return <Picker.Item value={res.key} key={key} label={res.nome} />
  });

  return (
    <View style={styles.container}>

      <Text style={styles.logo} >Menu Pizzas</Text>

      <Text style={styles.pizzas} >
        Você escolheu: {
          pizzas[pizza].nome
        }
      </Text>

      <Text style={styles.pizzas} >R$: {pizzas[pizza].valor.toFixed(1)}</Text>
      <View style={styles.areaPicker}>
        <Picker style={{ height: 50, width: 200 }}
          selectedValue={pizza}
          onValueChange={(e, index) => setPizza(e)}
        >
          {pizzasItem}
        </Picker>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  logo: {
    textAlign: "center",
    fontSize: 28,

  },
  pizzas: {
    marginTop: 15,
    fontSize: 28,
    textAlign: "center"
  },
  areaPicker: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});


