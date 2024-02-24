import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default props => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onClose}
        > 
            <View style={styles.frame}>
                <View style={styles.container}>
                    
                        {props.win ? <Text style={[styles.title, {color: 'green'}]}>Parabéns</Text> : <Text style={[styles.title, {color: 'red'}]}>Que pena</Text> }

                        {props.win ? <Text style={styles.text}>Você ganhou!</Text> : <Text style={styles.text}>Você perdeu!</Text> }

                    <TouchableOpacity
                        onPress={props.reniciarJogo}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>
                            Reniciar jogo
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red'
    },
    text: {
        fontSize: 20
    },
    button: {
        marginTop: 10,
        padding: 5,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#999',
    },
    buttonLabel: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        flexDirection: 'row',
        fontWeight: 'bold'
    }

})

