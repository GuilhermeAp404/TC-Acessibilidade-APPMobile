import { StyleSheet, TextInput } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor: '#5dbbff',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingTop: 70,
        gap: 4,
        paddingHorizontal:8,
        paddingBottom: 5,
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
        alignItems:"stretch",
        display:'flex',
        width:'95%',
        paddingHorizontal: 4
    },

    listItem:{
        backgroundColor:"#5dbbff",
        paddingVertical: 16,
        paddingHorizontal:8,
        marginTop: 16,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'left',
        borderRadius:4,
    }

})