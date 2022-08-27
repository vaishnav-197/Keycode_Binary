import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from '@/Theme'

const ListCard = ({ 
  imageSource, 
  title, 
  caption, 
  sideText,
  sideComponent,
  isSelected
}) => {
  return (
    <TouchableOpacity>
      <View>
        <ListCardImage imageSource={imageSource} />
        <ListCardInfo 
          title={title} 
          caption={caption} 
          sideText={sideText} 
          sideComponent={sideComponent}
        />
      </View>
    </TouchableOpacity>
  )
}

ListCard.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  sideComponent: PropTypes.node,
  sideText: PropTypes.string,
  imageSource: PropTypes.any,
  isSelected: PropTypes.bool
}

ListCard.defaultProps = {
  title: '',
  caption: '',
  sideText: '',
  isSelected: false
}

const ListCardImage = ({ imageSource }) => {
  const { Images } = useTheme()

  return (
    <View>
      <Image 
        source={imageSource || Images.logo} 
        style={styles.imageSize} 
      />
    </View>
  )
}

const ListCardInfo = ({ 
  title, 
  caption, 
  sideText, 
  sideComponent 
}) => {
  const { Layout, Fonts } = useTheme()

  return (
    <View style={styles.cardInfoStyle}>
      <View style={Layout.flexGrow}>
        <Text style={Fonts.titleSmallBold}>{title}</Text>
        {caption != '' && <Text style={Fonts.caption}>{caption}</Text>}
      </View>
      {sideText && (
        <View>
          {sideComponent}
          <Text>{sideText}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  imageSize: {
    width: '100%',
    height: 200,
  },
  cardInfoStyle: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
})

export default ListCard
