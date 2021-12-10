import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloSobre from './estiloHistoria';

function Sobre({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    const abrirInicial = () => {
        navigation.navigate('Inicial')
    }
    const abrirDetalhes = () => {
        navigation.navigate('Detalhes')
    }
    const abrirEventos = () => {
        navigation.navigate('Eventos')
    }
    const abrirObras = () => {
        navigation.navigate('Obras')
    }
    const abrirNoticias = () => {
        navigation.navigate('Noticias')
    }
    const abrirCampanhas = () => {
        navigation.navigate('Campanhas')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FF69B4'} }>
           
            <Text style={estiloSobre.titulo}>História estilo de dança jazz</Text>
            <Text style={estiloSobre.texto}>
            Nascido do blues, das work songs dos trabalhadores negros norte-americanos, do negro spiritual protestante e do ragtime, o jazz passou por uma extraordinária sucessão de transformações no século XX. É notável como essa música se modificou tão profundamente durante um período de apenas um século.
            </Text>
            <Text style={estiloSobre.texto}> 
            Esse aplicativo tem como principal função ensina-los sobre a dança  jazz.</Text>
            <Text style={estiloSobre.texto}> Sendo assim, sua origem a Dança Jazz tem raízes essencialmente populares. Com uma evolução inicial paralela à da música Jazz, surgiu 
            nos E.U.A no final do século passado. Pode-se afirmar, inclusive,  que nasceu diretamente da cultura negra . </Text>
            <Text style={estiloSobre.texto}>No início deste século, as danças afro-americanas começaram a entrar para os salões, e a sofrer novas influências: do can-can e do charleston, principalmente. Logo, essa dança que se pode até chamar de "mista", tomou conta dos palcos da Broadway, se transformando na conhecida comédia musical que, por sua vez, é o segundo nome dado à dança mais conhecida como jazz.</Text>

        </View>

    )
}

export default Historia;
