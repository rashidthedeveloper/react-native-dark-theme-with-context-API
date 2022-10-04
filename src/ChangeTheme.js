import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import {ThemeContext} from './ThemeContext';
import Themes from './Themes';

const ChangeTheme = ({navigation}) => {
  const {darkTheme, toggle} = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggle}
        style={[
          styles.button,
          {
            backgroundColor: darkTheme
              ? Themes.dark.background
              : Themes.light.background,
          },
        ]}>
        <Text
          style={{
            color: darkTheme ? Themes.dark.foreground : Themes.light.foreground,
          }}>
          Change Theme
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'blue'}}>Navigate to Home</Text>
      </Pressable>
    </View>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
});
