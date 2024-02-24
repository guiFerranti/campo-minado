import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default props => {

    
    return (
        <View>
            <Modal
                onRequestClose={props.onCancel} 
                visible={props.isVisible}
                animationType='slide'
                transparent={true} >
                <View style={styles.frame} >
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Selecione a dificuldade
                        </Text>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgEasy]}
                            onPress={() => props.onLevelSelected(0.1)} >
                            <Text style={styles.buttonLabel} >
                                Fácil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgNormal]}
                            onPress={() => props.onLevelSelected(0.2)} >
                            <Text style={styles.buttonLabel} >
                                Normal
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.bgHard]}
                            onPress={() => props.onLevelSelected(0.3)} >
                            <Text style={styles.buttonLabel} >
                                Difícil
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>



            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
        width: 100,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    bgEasy: {
        backgroundColor: '#49b65d',
    },
    bgNormal: {
        backgroundColor: '#2765f7',
    },
    bgHard: {
        backgroundColor: '#f26337',
    },
    
})