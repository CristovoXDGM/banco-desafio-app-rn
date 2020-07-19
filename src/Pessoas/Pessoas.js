import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Pessoas = ({ dados }) => {
    useEffect(() => {
        console.log(dados.item.nome);
    }, []);

    return (
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>Nome: {dados.item.nome}</Text>
            <Text style={styles.textoPessoa}>Idade: {dados.item.idade}</Text>
            <Text style={styles.textoPessoa}> Email: {dados.item.email}</Text>
        </View>
    );

}
const styles = StyleSheet.create({

    textoPessoa: {
        color: "#fff",
        fontSize: 20
    },
    areaPessoa: {
        height: 200,
        backgroundColor: "#222",
        marginBottom: 15
    }

});

export default Pessoas;