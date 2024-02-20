import React, { Component } from "react";
import params from "./src/param";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Field from './src/components/Field';

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Iniciando o Mines!</Text>
                <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()} </Text>

                <Field />
                <Field opened />
                <Field opened nearMines={6} />
                <Field mined opened />
                <Field mined opened exploded/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
})