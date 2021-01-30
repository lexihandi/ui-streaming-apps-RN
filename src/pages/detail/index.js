/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconBack,
  IconFavorite,
  IconFullStar,
  IconHalfStar,
  IconPlay,
  ImageTheWitcher,
} from '../../assets';
import {Actor} from '../../components';
import {colors, fonts} from '../../utils';

const Detail = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <IconBack style={styles.icon} />
        </TouchableOpacity>
        <Image source={ImageTheWitcher} style={styles.img} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>The Witcher</Text>
          <Text style={styles.genre}>Sci-Fiction</Text>
          <View style={styles.star}>
            <IconFullStar />
            <IconFullStar />
            <IconFullStar />
            <IconFullStar />
            <IconHalfStar />
          </View>
          <View style={styles.wrapperIcon}>
            <TouchableOpacity>
              <IconPlay />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconFavorite />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>Cast</Text>
        <Actor />
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background},
  icon: {position: 'absolute', zIndex: 10, top: 20, left: 20},
  img: {
    resizeMode: 'repeat',
    height: 480,
    width: 450,
    zIndex: -1,
    flex: 1,
  },
  wrapper: {marginTop: 20},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 30,
    color: colors.text.primary,
    textAlign: 'center',
  },
  genre: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.text.secondary,
    bottom: 10,
    textAlign: 'center',
  },
  star: {flexDirection: 'row', marginBottom: 20, alignSelf: 'center'},
  wrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 130,
    marginRight: 130,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    paddingLeft: 20,
  },
});
