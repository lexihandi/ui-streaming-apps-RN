import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageFreeyaAlan, ImageHenryCavill} from '../../assets';

const Actor = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cast}>
          <Image source={ImageHenryCavill} style={styles.img} />
          <View style={styles.text}>
            <Text>Henry Cavill</Text>
            <Text>Geralt</Text>
          </View>
        </View>
        <View style={styles.cast}>
          <Image source={ImageFreeyaAlan} style={styles.img} />
          <View style={styles.text}>
            <Text>Freeya Alan</Text>
            <Text>Ciri</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Actor;

const styles = StyleSheet.create({
  wrapper: {padding: 20, flexDirection: 'row'},
  cast: {flexDirection: 'row', marginRight: 20},
  img: {borderRadius: 5, height: 100, width: 100},
  text: {alignSelf: 'center', marginLeft: 10},
});
