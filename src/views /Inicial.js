import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#B0E0E6'}}>
         <ImageBackground style={estiloInicial.imagem} 
                 source={require('../../../Imagens/sumare.jpg')}>


</ImageBackground>

                <Text style={estiloInicial.titulo}>Dança</Text>
                <Text style={estiloInicial.texto}>Dança é arte</Text>
               

            </View>

        
    )
}