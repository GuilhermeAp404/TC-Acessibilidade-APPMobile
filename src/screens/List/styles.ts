import { StyleSheet, TextInput } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#fff',
    },
    
    header:{
        display:'flex',
        backgroundColor: '#5dbbff',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 75,
        gap: 12,
        paddingHorizontal:8,
        paddingBottom: 15,
    },

    button:{
        fontSize:52,
        color:'#fff'
    },

    textInput:{
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingVertical: 4,
        color:'#fff',
        fontSize:18,
        fontWeight: 'semibold'
    },

    listContainer:{
        width:'95%',
        paddingHorizontal: 4,
        marginBottom: 12
    },

    listItem:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: '#DEF1FF',
        borderColor:"#5dbbff",
        borderWidth: 3,
        paddingVertical: 16,
        paddingHorizontal:8,
        marginTop: 16,
        borderRadius:4,
    },

    listItemText:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'left',
    },

})