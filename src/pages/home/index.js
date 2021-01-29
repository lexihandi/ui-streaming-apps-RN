import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageFreeGuy, ImageGunsAkimbo, ImageTheDarkKnight} from '../../assets';
import {Banner, Content, Header} from '../../components';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Coming Soon</Text>
        <Banner />
        <Text style={styles.text}>Top Movies</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Content image={ImageFreeGuy} title="Free Guy" genre="Comedy" />
          <Content
            image={ImageTheDarkKnight}
            title="The Dark Knight"
            genre="Action"
          />
          <Content image={ImageGunsAkimbo} title="Guns Akimbo" genre="Comedy" />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.background},
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    paddingLeft: 20,
  },
});
