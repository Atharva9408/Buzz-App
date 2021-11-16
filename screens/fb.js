import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.imageIcon} source={{require:'assets/fbLogo.png'}}/>
                <Text style={styles.displayText}>Facebook</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#4267B2',
    alignItems: 'center',
    justifyContent: 'center'
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
