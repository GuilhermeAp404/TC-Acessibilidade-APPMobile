import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';


import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackNavigation } from '../../../App';

export function List() {
    const navigation = useNavigation<StackNavigation>()
    const [input, setInput]=useState('')
    const [productsList, setProductsList]=useState<string[]>([])

    function getTypedText(text:string){
        setInput(text)
    }

    async function sendToList(){
        if(input!==''){
            if(productsList.includes(input)){
                alert('Esse item já está em sua lista')
                setInput('')
                return
            }
            setProductsList([...productsList, input])
            setInput('')
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.button}>↺</Text>
                </TouchableOpacity>
                
                <TextInput 
                    placeholder='Insira o nome do produto aqui...' 
                    value={input} style={styles.textInput} 
                    onChangeText={(e)=>getTypedText(e)}
                />

                <TouchableOpacity onPress={sendToList}>
                    <Text style={styles.button}>➣</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>

                <FlatList
                    data={productsList}
                    renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <StatusBar style='auto'/>
        </View>
    );
}