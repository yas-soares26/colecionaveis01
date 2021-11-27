import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhes from './estiloDetalhes';

function Detalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>

        
        
           <Text style={estiloDetalhes.titulo}>Detalhes da dança</Text>

    </View>

    )
}
export default Detalhes;
