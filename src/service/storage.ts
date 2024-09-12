import AsyncStorage from '@react-native-async-storage/async-storage';

interface ItemType {
    key:string,
    value?:string[]|string
}

export function storage (){
    const save= async(item:ItemType) =>{
        try{
    
            await AsyncStorage.setItem(
                item.key, 
                JSON.stringify(item.value)
            )
            return true;
        }catch(e){
            return false
        }
    }
    
    const getItem = async({key}:ItemType)=>{
        try {
            
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (err) {
            return null
        }
    }

    return {getItem, save}
}
