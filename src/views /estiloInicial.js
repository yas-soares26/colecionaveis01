import { StyleSheet, StatusBar } from 'react-native';

const estiloInicial = StyleSheet.create ({
    
    titulo: {
        fontSize: 70,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    textinho: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },

    scrollView: {
        marginHorizontal: 5
    },

    subtitulo: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Cochin",
        padding: 10
    },

    texto: {
        fontSize: 20,
        color: '#000000',
        textAlign: "justify",
        fontFamily: "Arial",
        padding: 10,
        marginLeft: 50,
        marginRight: 50
    },
    imagem:{
        width: '100%',
        height: '100%',
        flex: 1 

    }
});

export default estiloInicial;
