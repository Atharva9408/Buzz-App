import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class InstaScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.imageIcon} source={{require:'assets/instaLogo.png'}}/>
                <Text style={styles.displayText}>Instagram</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#9a5abf',
    alignItems: 'center',
    justifyContent: 'center',
    },
    displayText:{
        color:'#fff',
        alignSelf:'center'
    },
    imageIcon:{
        width:150,
        height:150,
        alignSelf:'center'
    }
})
