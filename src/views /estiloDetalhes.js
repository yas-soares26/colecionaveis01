import { StyleSheet } from 'react-native';

const estiloDetalhes = StyleSheet.create ({

     
    titulo: {
        fontSize: 70,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    
    texto: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    imagem:{
        width: 500,
        resizeMode: 'contain'
    }
});
export default estiloDetalhes;
