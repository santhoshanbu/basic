import React from "react";
import { View  , Image, Text } from 'react-native'


export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Image source={{
                uri: 'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg',
                            }}
                style={{ flex: 1, resizeMode: 'contain' }} />
        </View>
    )
}