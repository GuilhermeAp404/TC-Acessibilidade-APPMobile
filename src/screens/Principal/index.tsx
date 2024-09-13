import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Text, View, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import { styles } from './styles'

import MonkeyLogo from '../../../assets/robotic-monkey.png'
import api from '../../service/axios';

import { StackNavigation } from '../../../App';

export function Principal() {
    const navigation = useNavigation<StackNavigation>()
    
    let camera = useRef<CameraView|null>(null)
    const[facing]=useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    
    const [product, setProduct]=useState<String>('')

    async function sendToApi(){
        if (camera.current) {
        const data = await camera.current.takePictureAsync();

        const formData = new FormData();
        formData.append('image', JSON.parse(JSON.stringify({
            uri:data?.uri,
            name:'image.jpg',
            type:'image/jpg'
        })))
        const response = await api.post('/api/vision', formData, {
            headers:{
            'Content-Type':'multipart/form-data'
            }
        })
        .then(request=> request.data)
        .then(response=> {return response})
        .catch(err=>console.log(err))


        let product:String
        if(response.products[0]!=="" || response.products[0].includes('-'||'|'||":")){
            product=response.products[0]
        }else{
            product=response.products[1]
        }

        setProduct(product)
        setTimeout(()=>{
            setProduct("")
        }, 5000)
        }
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.cameraContainer}>

                <CameraView accessibilityLabel={'Câmera'} ref={camera}style={styles.cameraContainer} facing={facing} />
                <Pressable 
                    style={styles.cameraContainer} 
                    onPress={sendToApi}
                    accessible={true}
                    accessibilityLabel={'Identificar o produto'}
                    accessibilityHint={'Aponte para o produto e clique aqui para identificar'}
                    accessibilityRole={'button'}
                />
            </View>
            
            <View style={styles.menuButtons}>

                <TouchableOpacity 
                    style={styles.touchable} 
                    onPress={()=>navigation.navigate("List")}
                    accessible={true}
                    accessibilityLabel={'Ir para lista de compras'}
                    accessibilityHint={'Clique para ir para lista de compras'}
                    accessibilityRole={'button'}
                >
                    <Text style={styles.touchableText}>✏️</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.displayView}>

                <Text 
                    style={styles.productText}
                    accessibilityLiveRegion={'assertive'}
                    accessibilityLabel= {'Nome do produto'}
                    accessibilityHint={'É nessa região que fica o nome do produto identificado'}
                >
                    {product}
                </Text>
                <Image source={MonkeyLogo} style={styles.ImageLogo} />
            </View>
            <StatusBar style='light'/>
        </View>
    );
}


