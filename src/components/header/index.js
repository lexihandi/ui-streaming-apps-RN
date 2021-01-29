import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconNav, ImageAccount} from '../../assets';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <IconNav />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={ImageAccount} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {height: 50, width: 50},
});
