import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Alert, StyleSheet} from 'react-native';
import PokemonApi from '../../../apis/PokemonApi';
import PokemonList from './PokemonList';

const logo = require('../../../../assets/img/logo.png');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  useEffect(() => {
    PokemonApi.getAll()
      .then((pokemonList) => {
        if (pokemonList && pokemonList.data && pokemonList.data.results) {
          setList(pokemonList.data.results);
        }
      })
      .catch(() => {
        Alert.alert('Mensaje', 'Ocurrio un error al obtener la información.');
      });
  }, []);

  const goPokemon = (pokemon) => {
    navigation.navigate('pokemon', {
      ...pokemon,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <PokemonList {...{list, goPokemon}} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
