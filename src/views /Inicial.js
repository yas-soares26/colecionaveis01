import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirSobre = () => {
        navigation.navigate('Historia')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FF69B4'}}>

            <SafeAreaView style={estiloInicial.container}>
            <ScrollView style={estiloInicial.scrollView}>

                        <Text style={estiloInicial.titulo}>Dança</Text>
                        <Text style={estiloInicial.textinho}>Bem-vindo ao nosso aplicativo que vai te 
                        mostrar o melhor da dança</Text><br></br>
                        <br></br>
                        <Text style={estiloInicial.subtitulo}>Dança é a arte de movimentar expressivamente o corpo seguindo movimentos ritmados, em geral ao som de música.</Text><br></br>       

            </ScrollView>
            </SafeAreaView>  
                  
      </View>

    )
}

export default Inicial;
