import React from 'react';
import Field from './Field';
import { StyleSheet, View } from 'react-native';

export default props => {

    const rows = props.board.map((row, r) => {
        const columns = row.map((field, f) => {
            return <Field {...field} key={f}
                onOpen={() => props.onOpenField(r, f)}
                onSelect={e => props.onSelectField(r, f)}
            
            />
        })
        return <View 
            key={r}  
        style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    }
})