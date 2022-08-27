import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const FloatingActionButton = ({ icon, onPress }) => {
  return (
    <View style={styles.floatingActionButton}>
      <TouchableOpacity onPress={onPress}>
        { icon }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  floatingActionButton: {
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#ee6e73',                                    
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10, 
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FloatingActionButton