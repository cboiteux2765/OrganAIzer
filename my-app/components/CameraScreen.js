import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'react-native-camera';
import tw from 'twrnc';

const CameraScreen = () => {
    const [imageUris, setImageUris] = useState([]);
    const [camera, setCamera] = useState(true);

    const takePicture = async () => {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        setImageUris([...imageUris, data.uri]);
        setCamera(false);
    }

    return (
        <View style={tw`flex-1 justify-center items-center`}>
            {camera ? (
                <Camera
                ref={ref => {
                    camera = ref;
                }}>
                    <Button onPress={takePicture} title="Capture"></Button>
                </Camera>
            ) : (
                <Button onPress={()=>setCamera(true)} title='Camera'/>
            )}
        </View>
    );
}
 
export default CameraScreen;