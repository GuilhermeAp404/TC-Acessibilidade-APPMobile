import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storage } from '../../service/storage';

import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

import { StackNavigation } from '../../../App';

export function List() {
    const {getItem, save} = storage()
    const navigation = useNavigation<StackNavigation>()
    const [input, setInput]=useState('')
    const [productsList, setProductsList]=useState<string[]>([])

    useEffect(()=>{
        async function getStorageList() {
            const storageList = await getItem({key:'productsList'})
            if(storageList != null){
                setProductsList(storageList)
            }
        }

        getStorageList()
    }, [])

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

            await save({key: 'productsList', value: [...productsList, input] })
            let newList = await getItem({key:'productsList'})
            setProductsList(newList)

            setInput('')
            
        }
    }

    async function deleteItem(itemName:string){
        const newList = productsList.filter((item)=>item!==itemName)

        await save({key: 'productsList', value: newList })
        setProductsList(newList)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={{fontSize:32, color:'white', fontWeight:'bold'}}>Lista</Text>

                <View style={{flexDirection:'row', gap:12}}>
                
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <Entypo name="arrow-with-circle-left" size={42} color="white" />
                    </TouchableOpacity>
                    
                    <TextInput 
                        placeholder='Insira o nome do produto aqui...' 
                        value={input} style={styles.textInput} 
                        onChangeText={(e)=>getTypedText(e)}
                    />

                    <TouchableOpacity onPress={sendToList}>

                        <AntDesign name="pluscircle" size={42} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.listContainer}>

                {productsList.map((item)=>(
                    <View style={styles.listItem} key={item}>

                        <Text style={styles.listItemText}>{item}</Text>
                        
                        <TouchableOpacity onPress={()=>deleteItem(item)}>
                            <MaterialCommunityIcons name="trash-can" size={42} color="black" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <StatusBar style='auto'/>
        </View>
    );
}