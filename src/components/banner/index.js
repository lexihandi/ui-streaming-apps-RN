import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ImageQuietPlace} from '../../assets';
import {colors, fonts} from '../../utils';

const Banner = () => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={ImageQuietPlace} style={styles.image} />
      <Text style={styles.title}>A Quiet Place II</Text>
      <Text style={styles.date}>April 2021</Text>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  image: {height: 200, width: 375, borderRadius: 15},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 10,
  },
  date: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
