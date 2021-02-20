import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Input, Button, Image } from 'react-native-elements';
import imagen from './media/inicio.jpg'

export default function App() {  /* Clase- Mostrar clase por defecto App */
  return (
    <View style={styles.container}>

        <View style={styles.body}>

            <View style={styles.bodyheader}>
              
              <Image
                  style={styles.image}
                  source={imagen}
              />
            </View> 

            <View style={styles.bodybody}>
              <Input
                  placeholder='Email'
              />
              <Input
                  placeholder='Password'
              />
            </View>

            <View style={styles.footer}>
              <Button
                  title="Sign In"
              />
            </View>
  

        </View >
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    justifyContent: 'center', 
  },

  body: {
    marginVertical: '50%',
    marginHorizontal: '10%',
    flex: 1,
    flexGrow: 10,
    backgroundColor: '#B8FF33',
    justifyContent: 'center',
  },

  bodyheader: {
    flex: 3,
    /* marginVertical: '30%',
    marginHorizontal: '10%', */
    justifyContent: 'center',
    backgroundColor: '#FF5733',
  },

  bodybody: {
    flex: 1,
    marginVertical: '30%',
    marginHorizontal: '10%',
    flexGrow: 5,
    backgroundColor: '#FF5733',
    justifyContent: 'flex-end',
  },

  footer: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: '15%',
    marginHorizontal: '10%',
  },

  image:{
      width:30,
      height:30,
  },


});
