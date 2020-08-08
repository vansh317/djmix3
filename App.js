import * as React from 'react';
import { Text, View, Button , TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';


class Mysound extends React.Component {
  playsound = async () => {
    await Audio.Sound.createAsync(
    {uri: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Scratching-11922-Free-Loops.com.mp3'},
    {shouldPlay: true }
    );
   
   
  }
  
  render() {
    return (
      <View
        style={{
          width: 150,
          height: 150,
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 100,
        }}>
        <Button color="red" title="sound 1" onPress={this.playsound} />
        <Button color="" title="sound 2" onPress={this.playsound2} />
        <Button color="blue" title="sound 3" onPress={this.sound3} />
        <Button color="green" title="sound 4" onPress={this.sound4} />
        <Button color="orange" title="sound 5" onPress={this.sound5} />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      
      <Mysound/>
    );
  }
}
