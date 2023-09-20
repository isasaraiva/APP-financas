import React from 'react' ;
import {StyleSheet, Text , TouchableOpacity, View} from 'react-native' ;

export function Botao() {
    return (
        <TouchableOpacity style ={{
            backgroundColor: 'green',
            width:80,
            height:20,
            marginVertical:10}}>
            <Text>Botao</Text>
            </TouchableOpacity>

    );
}