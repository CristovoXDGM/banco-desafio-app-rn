import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default function App() {

  const [nome, setNome] = useState();

  const dados = [
    { key: 1, sexo: "masculino" },
    { key: 2, sexo: "feminino" },
  ];

  const [generos, setGeneros] = useState(dados)
  const [indexGenero, setIndexGeneros] = useState(0);
  const [limit, setLimite] = useState(100);
  const [isStudent, setIsStudent] = useState(false);

  let itemGenero = generos.map((res, key) => <Picker.Item value={key} label={res.sexo} key={key} />);

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Abra sua conta ja aqui</Text>
      <TextInput style={styles.input} value={nome} onChangeText={(e) => setNome(e)}
        placeholder="Nome" />

      <View style={styles.picker}>
        <Picker style={{ width: 200, height: 20 }} selectedValue={indexGenero} onValueChange={(e, index) => setIndexGeneros(e)} >
          {itemGenero}
        </Picker>

      </View>
      <Text style={styles.textoSelecLimit} >
        Selecione o seu limite de cartão:
        </Text>
      <Text style={styles.limiteText} > R${limit.toFixed(2)}</Text>
      <View style={styles.sliderArea}>
        <Slider minimumValue={0} maximumValue={500} onValueChange={(r) => setLimite(r)} style={styles.slider} />
      </View>
      <Text style={styles.studentText} >{isStudent ? "Estudante" : "Não sou estudante"}</Text>
      <Switch value={isStudent} onValueChange={(e) => setIsStudent(e)} />

      <View style={styles.button}>
        <TouchableOpacity onPress={() => alert(
          "Parabens, você criou uma conta" + "\n" +
          "seu nome é : " + nome + "\n" +
          "seu limite é: R$" + limit + "\n" +
          "Estudante :" + (isStudent ? "Sim" : "não") + "\n" +
          "Sexo: " + (generos[indexGenero].sexo)
        )} >
          <Text> Abrir conta </Text>
        </TouchableOpacity>
      </View>

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
  input: {
    margin: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: Dimensions.get("window").width / 1.5
  },
  picker: {
    margin: 10
  },
  slider: {
    width: Dimensions.get("window").width / 1.5
  },
  button: {
    height: 40,
    width: Dimensions.get("window").width / 1.5,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  studentText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  appName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20
  },
  sliderArea: {
    margin: 15
  },
  limiteText: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  textoSelecLimit: {
    margin: 5,
    fontSize: 22,
    fontWeight: "bold"
  }


});


