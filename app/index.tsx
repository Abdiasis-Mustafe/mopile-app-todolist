// import { View, Text,StyleSheet  } from 'react-native'
// import React from 'react'

// export const index = () => {
//   return (
//     <View style={styles.container}>
//       <View >

//       <Text>Hello man</Text>
//       </View>
//     </View>
//   )
// }

// const styles= StyleSheet.create({
//   container:{
//     color:"#00d4ff"
//   },
// })


import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import Task from '../components/Task'

const Index = () => {
  const [task,SetTask]= useState();
  return (
    <View style={styles.container}>
      <View style={styles.Main}>
        <Text style={styles.Title}>Todo list</Text>
        <View style={styles.items}>
        <Task text={"text2"}/>
        </View>
      </View>
   {/*  input part  */}
   <KeyboardAvoidingView behavior={Platform.OS==="android"? "padding":'height'} style={styles.WritetaskWrap}>
    <TextInput  style={styles.input} placeholder='Write task here'/>
    <TouchableOpacity>
      <View style={styles.AddWraper}>
        <Text style={styles.Addtext}>
          +
        </Text>
      </View>
    </TouchableOpacity>

   </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",  // Use backgroundColor instead of color
    flex: 1,                      // Ensure the View takes up the full screen or use appropriate flex values
            // Center content horizontally
  },
  Main:{
    marginTop:100,
    padding:20
  },
  Title:{
    fontSize:24,
    fontWeight:"bold"
  },
  items:{
  marginTop:30,
  },
  WritetaskWrap:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250
  },
  AddWraper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  Addtext:{},
});
export default Index;