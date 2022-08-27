import React from 'react'
import { StyleSheet, View } from 'react-native'

const FloatingActionButton = ({ icon }) => {
  return (
    <View style={styles.floatingActionButton}>
      { icon }
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