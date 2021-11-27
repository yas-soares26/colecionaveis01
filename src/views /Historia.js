import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Historia from './estiloInicial';
import estiloSobre from './estiloHistoria';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (

        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>

        <Text style={estiloSobre.titulo}>Sobre</Text>   

    </View>

    )
}

export default Historia;
