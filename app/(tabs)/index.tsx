import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://i.pinimg.com/736x/42/8a/fc/428afc1730eaa05e83085702169e849e.jpg',
  width: 80,
  height: 80,
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 50}}>Scroll yukk</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 50}}>Kaloo kepo</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 50}}>Scroll kebawah lagi</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 50}}>Belajar apanih</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 50}}>Apayaaa</Text>
    <Image source={logo} />
    <Text style={{fontSize: 50}}>React Native donggg</Text>
  </ScrollView>
);

export default App;