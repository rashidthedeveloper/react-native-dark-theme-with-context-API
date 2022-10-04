import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeContext} from './ThemeContext';
import Themes from './Themes';
const Home = () => {
  const {darkTheme} = React.useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
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
        This is Home!
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
