import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    cameraContainer:{
        position: 'absolute',
        height:'100%',
        width:'100%',
    },

    menuButtons:{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        top: '10%',
        right:0,
        paddingHorizontal: 18,
        paddingVertical: 10,
    },

    touchable:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        height: 75,
        width: 75,
        backgroundColor:'#5dbbff',
        borderRadius: 50,
    },

    touchableText:{
        textAlign: 'center',
        fontSize: 32,
    },

    displayView:{
        position:'absolute',
        bottom: '0%',
        width:'100%',
        gap: 12,
        alignItems: 'center'
    },

    productText:{
        width:'100%',
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor:'#5dbbff',
        borderColor:'#fff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        flexWrap: 'wrap',
    },

    ImageLogo:{
        width:120,
        height:120
    }

})