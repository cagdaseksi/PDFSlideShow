/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, SafeAreaView} from 'react-native';
import ImageSlider from 'react-native-image-slider';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const images = [
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
      require('./img/example-01.jpg'),
      require('./img/example-02.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-03.jpg'),
      require('./img/example-04.jpg'),
      require('./img/example-05.jpg'),
      require('./img/example-06.jpg'),
      require('./img/example-07.jpg'),
      require('./img/example-08.jpg'),
      require('./img/example-09.jpg'),
    ];
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.contentText}>Content 1</Text>
      </View>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        images={images}
        customSlide={({ index, item, style, width }) => (
          // It's important to put style here because it's got offset inside
          <View key={index} style={[style, styles.customSlide]}>
          {/* <Text>{item}</Text> */}
            <Image source={item} style={styles.customImage} resizeMode="stretch" />
          </View>
        )}
        customButtons={(position, move) => (
          <View style={styles.buttons}>
            {images.map((image, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  underlayColor="#ccc"
                  onPress={() => move(index)}
                  style={styles.button}
                >
                  <Text style={position === index && styles.buttonSelected}>
                    {index + 1}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </View>
        )}
      />
      <View style={styles.content2}>
        <Text style={styles.contentText}>Content 2</Text>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
});
