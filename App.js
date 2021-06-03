import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.goal}>
          <TextInput style={styles.input} placeholder="Type your goal"/>
          <Button title="ADD"/>
      </View>
      <View>
        
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 app:{
   padding: 30,
 },
 input:{
   borderColor: 'black',
   borderWidth: 1,
   padding: 10,
   marginBottom: 5,
   width: '80%'
 },
 goal:{
  flexDirection: "row",
  justifyContent: 'space-between',
  alignItems: 'center',
 }
 
});
