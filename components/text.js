import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class t1 extends Component {
  render() {
    return (
      <View >
        <Text>
          Welcome to React Native!
        </Text>
         <Icon name='logo-apple' color='black' size={100}/>
      </View>
    );
  }
}

//export t1;

export default t1;