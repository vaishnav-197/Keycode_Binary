import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { CheckIcon } from 'native-base'
import { Colors } from '@/Theme/Variables'
import { Fonts } from '@/Theme/Fonts'
import { Layout } from '@/Theme/Layout'

const ListCard = ({
  imageSource,
  title,
  caption,
  sideText,
  sideComponent,
  isSelected,
  onPressed,
  onLongPressed,
}) => {
  return (
    <TouchableOpacity onLongPress={onLongPressed} onPress={onPressed}>
      <View
        style={[
          styles.listCardContainer,
          isSelected && styles.selectedCardContainer,
        ]}
      >
        {isSelected && (
          <View style={styles.cardImageOverlay}>
            <Text style={[Fonts.titleSmallBold, { color: '#fff' }]}>
              <CheckIcon size={'14'} color="#fff" />
            </Text>
          </View>
        )}
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
  caption: PropTypes.string,
  imageSource: PropTypes.any,
  isSelected: PropTypes.bool,
  onLongPressed: PropTypes.func,
  onPressed: PropTypes.func,
  sideComponent: PropTypes.node,
  sideText: PropTypes.string,
  title: PropTypes.string,
}

ListCard.defaultProps = {
  title: '',
  caption: '',
  sideText: '',
  isSelected: false,
  onPressed: () => {},
  onLongPressed: () => {},
}

const ListCardImage = ({ imageSource }) => {
  return (
    <View style={styles.cardImageContainer}>
      <Image source={{ uri: imageSource }} style={styles.cardImage} />
    </View>
  )
}

const ListCardInfo = ({ title, caption, sideText, sideComponent }) => {
  return (
    <View style={styles.cardInfoStyle}>
      <View style={Layout.flexGrow}>
        <Text style={Fonts.titleSmallBold}>{title}</Text>
        {caption != '' && <Text style={Fonts.caption}>{caption}</Text>}
      </View>
      {(sideText || sideComponent) && (
        <View>
          <Text>{sideComponent}</Text>
          <Text>{sideText}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  listCardContainer: {
    overflow: 'hidden',
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  selectedCardContainer: {
    borderColor: Colors.primary,
  },
  cardImageContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cardImage: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  cardInfoStyle: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cardImageOverlay: {
    position: 'absolute',
    right: 16,
    top: 16,
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: Colors.primary,
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ListCard
