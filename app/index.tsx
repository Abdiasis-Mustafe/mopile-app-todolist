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


import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Task from '../components/Task'

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Main}>
        <Text style={styles.Title}>Todo list</Text>
        <View style={styles.items}>
        <Task text={"text2"}/>
        </View>
      </View>
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
    fontSize:20,
    fontWeight:"bold"
  },
  items:{
  marginTop:30,
  }
});
export default Index;