import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sabih SIddiqui</Text>
        <Text>Sabih SIddiqui</Text>
        <Text style={styles.colors}>Muhammad Danial</Text>

        <Image source={{require: 'https://facebook.github.io/react/img/logo_og.png'}} />
        
      </View>
      
      
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    color: '#fff',
  }
});
