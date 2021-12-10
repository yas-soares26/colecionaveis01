import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
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

        </ImageBackground>-

             <SafeAreaView style={estiloInicial.container}>
      <ScrollView style={estiloInicial.scrollView}>

                <Text style={estiloInicial.titulo}>Updated</Text>
                <Text style={estiloInicial.textinho}>Seja bem-vindo ao aplicativo de notícias 
                da sua região!</Text><br></br>
                <br></br><br></br><br></br>
                <Text style={estiloInicial.subtitulo}>Dança</Text><br></br>
                <Text style={estiloInicial.texto}>  </Text>
                <Text style={estiloInicial.texto}>
                </Text>
                <Text style={estiloInicial.texto}></Text>

            </ScrollView>
            </SafeAreaView>
             
             </View>
    
        
    )
}

export default Inicial;