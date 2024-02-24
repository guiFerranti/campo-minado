import React, { Component } from "react";
import params from "./src/param";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import MineField from './src/components/MineField';
import { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagUsed
} from './src/components/function';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import Resultado from './src/screens/Resultado';


export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState()
    }
    
    
    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
            showResultado: false,

        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            this.setState({ showResultado: true, title: 'Fim de jogo' , message: 'Você perdeu!' })
        }

        if (won) {
            this.setState({ showResultado: true, modalMessage: 'Que pena, você perdeu!' })
        }

        this.setState({ board, lost, won })
    }

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)

        if (won) {
            Alert.alert('Parabéns', 'Você ganhou!')
        }

        this.setState({ board, won })
    }

    onLevelSelected = level => {
        params.difficultLevel = level
        this.setState(this.createState())
    }

    render() {
        return (
                <SafeAreaView style={styles.container}>
                    <LevelSelection
                        isVisible={this.state.showLevelSelection}
                        onLevelSelected={this.onLevelSelected} 
                        onCancel={() => this.setState({ showLevelSelection: false })}
                        />
                        {this.state.showResultado &&
                            <Resultado 
                                visible={this.state.showResultado}
                                title={this.state.title}
                                message={this.state.message}
                                onClose={() => this.setState({ showResultado: false })}
                                reniciarJogo={() => this.setState(this.createState())}
                            />
                        }
                    <Header
                        flagsLeft={this.minesAmount() - flagUsed(this.state.board)}
                        onNewGame={() => this.setState(this.createState())}
                        onFlagPress={() => this.setState({ showLevelSelection: true }) }
                    />
                    <View style={styles.board} >

                        <MineField board={this.state.board} onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField} />

                    </View>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        
        alignItems: 'center',
        backgroundColor: '#aaa'
    }    
})