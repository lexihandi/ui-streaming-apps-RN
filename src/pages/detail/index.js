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
  ImageFreeyaAlan,
  ImageHenryCavill,
  ImageTheWitcher,
} from '../../assets';
import {Actor} from '../../components';
import {colors, fonts} from '../../utils';

const Detail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}>
          <IconBack />
        </TouchableOpacity>
        <View>
          <Image source={ImageTheWitcher} style={styles.img} />
        </View>
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
        <View style={styles.wrapperActor}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Actor image={ImageHenryCavill} name="Henry Cavill" role="Geralt" />
            <Actor image={ImageFreeyaAlan} name="Freeya Alan" role="Ciri" />
          </ScrollView>
        </View>
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
    position: 'relative',
  },
  bg: {
    backgroundColor: colors.gradient,
    width: 450,
    height: 140,
    position: 'absolute',
    top: 340,
    opacity: 0.5,
    shadowOpacity: 1,
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
    bottom: 5,
    textAlign: 'center',
  },
  star: {flexDirection: 'row', marginBottom: 20, alignSelf: 'center'},
  wrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginLeft: 130,
    marginRight: 130,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    paddingLeft: 20,
  },
  wrapperActor: {flexDirection: 'row'},
});
