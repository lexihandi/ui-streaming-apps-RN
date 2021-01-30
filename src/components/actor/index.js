import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

const Actor = ({image, name, role}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cast}>
        <Image source={image} style={styles.img} />
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>
    </View>
  );
};

export default Actor;

const styles = StyleSheet.create({
  wrapper: {padding: 20, flexDirection: 'row'},
  cast: {
    flexDirection: 'row',
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gradient,
    backgroundColor: colors.background,
  },
  img: {
    borderRadius: 8,
    height: 100,
    width: 90,
    resizeMode: 'stretch',
  },
  text: {alignSelf: 'center', marginLeft: 10},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.primary,
  },
  role: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
