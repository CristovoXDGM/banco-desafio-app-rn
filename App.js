import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Pessoas from './src/Pessoas/Pessoas';

export default function App() {

  const dados = [{
    nome: "Cristovão",
    idade: 20,
    email: "cristovoxdgm@gmail.com"
  },
  {
    nome: "Fulano2",
    idade: 22,
    email: "cristovoxdgm@gmail.com"
  },
  {
    nome: "Cicrano",
    idade: 30,
    email: "cristovoxdgm@gmail.com"
  },
  {
    nome: "Cicrano",
    idade: 30,
    email: "cristovoxdgm@gmail.com"
  },
  {
    nome: "Cicrano",
    idade: 30,
    email: "cristovoxdgm@gmail.com"
  },
  {
    nome: "Cicrano",
    idade: 30,
    email: "cristovoxdgm@gmail.com"
  }
  ];
  const [userlist, setUserList] = useState(dados);



  return (
    <View style={styles.container}>

      {/* <Text style={{ padding: 40 }}>Os dados devem aparecer aqui</Text> */}
      <FlatList
        data={userlist}

        renderItem={
          (items) =>
            // console.log(items.item.nome);
            <Pessoas dados={items} />
        }
      />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


