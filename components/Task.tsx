import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Task = (props:any) => {
  return (
    <View style={styles.Item}>
      <View style={styles.Itemleft}>

      <TouchableOpacity style={styles.Square} ></TouchableOpacity>

      <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  )
}

const styles=StyleSheet.create({
  Item:{
  backgroundColor:"#fff",
  padding:15,
  borderRadius:10,
  alignItems:'center',
  justifyContent:'space-between',
  marginBottom:20,
  flexDirection:'row'
  
  },
  Itemleft:{
    flexDirection:'row',
    alignItems:"center",
    flexWrap:"wrap",
    gap:10

  },
  text:{
    maxWidth:"80%"
  },
  Square:{
    width:24,
    height:24,
    backgroundColor:"#55BCF6",
    opacity:0.4,
    borderRadius:5

  },
  circle:{
    width:12,
    height:12,
    borderColor:"#55BCF6",
    borderWidth:2,
    borderRadius:5,
  }
  

})

export default Task