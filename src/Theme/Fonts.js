import { StyleSheet } from 'react-native'
import { Colors } from './Variables'

const FontSize = {
  small: 16,
  regular: 18,
  large: 20
}

export const Fonts = StyleSheet.create({
  caption: {
    fontSize: FontSize.small * 0.8,
    color: Colors.darkGray,
  },
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmallBold: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontWeight: 'bold',
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  primaryText: {
    color: Colors.primary,
  },
  whiteText: {
    color: Colors.white,
  },
})
