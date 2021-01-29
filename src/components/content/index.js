import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';

const Content = ({image, title, genre}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.genre}>{genre}</Text>
    </TouchableOpacity>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  image: {height: 230, width: 150},
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 10,
  },
  genre: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
