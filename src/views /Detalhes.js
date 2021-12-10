import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhes from './estiloDetalhes';

function Detalhes({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    const abrirSobre = () => {
        navigation.navigate('Historia')
    }
    const abrirInicial = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FF69B4'}}>

           <Text style={estiloDetalhes.titulo}>Tipos de dança</Text>
           <Text style={estiloDetalhes.texto}>Há diversos tipos de dança, praticados em vários períodos da história e em todos os lugares do mundo. Por isso, é praticamente impossível falar de todos eles. Vamos listar algumas das danças mais conhecidas e praticadas atualmente:</Text>      
           <Text style={estiloDetalhes.titulo}>1º Balé:</Text>
           <Text style={estiloDetalhes.texto}>Originou-se no século XVI, durante o Renascimento, e sofreu inúmeras modificações ao longo do tempo. Hoje, existem muitos estilos de balé, dentre os quais o clássico e o contemporâneo.</Text>
           <Text style={estiloDetalhes.titulo}>2º Dança contemporânea</Text>
           <Text style={estiloDetalhes.texto}>Surgida nos anos 1960, a dança contemporânea é hoje uma das mais praticadas e estudadas pelos profissionais da dança. É caracterizada pela mistura de estilos e pela improvisação.</Text>
           <Text style={estiloDetalhes.titulo}>3º Jazz: </Text>
           <Text style={estiloDetalhes.texto}>popularizado nos Estados Unidos no início do século XX, o jazz é fruto da mistura de elementos de origem africana e europeia, como o balé e a dança moderna.</Text>
           <Text style={estiloDetalhes.titulo}>4º Dança moderna: </Text>
           <Text style={estiloDetalhes.texto}>os movimentos de dança moderna nascem, no início do século XX, como uma reação a algumas limitações e regras do balé. Caracteriza-se pela maior liberdade dos movimentos. A pioneira da dança moderna é a dançarina norte-americana Isadora Duncan.</Text>
           <Text style={estiloDetalhes.titulo}>5º Dança de salão:  </Text>
           <Text style={estiloDetalhes.texto}>dança de salão é um nome genérico que se dá a diversos estilos de dança em dupla, como a gafieira, a sala, o samba, a rumba, o forró, o tango e o bolero. Atualmente, há diversas escolas que ensinam dança de salão e clubes onde as pessoas se reúnem para praticar e se divertir.</Text>
        </View>

    )
}
export default Detalhes;

