import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'components';
import {string, func} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const PokemonItem = ({name, goPokemon}) => (
  <TouchableOpacity onPress={goPokemon}>
    <View style={styles.container}>
      <Text type="subtitle">{name}</Text>
      <Icon name="chevron-right" size={20} light color="#43485C" />
    </View>
  </TouchableOpacity>
);

PokemonItem.propTypes = {
  name: string,
  goPokemon: func,
};

export default PokemonItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
