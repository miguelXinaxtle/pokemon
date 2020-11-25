import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, Alert, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PokemonApi from '../../../apis/PokemonApi';
import Types from './Types';
import Stats from './Stats';
import Sprites from './Sprites';
import Abilities from './Abilities';

const PokemonScreen = ({route}) => {
  const navigation = useNavigation();
  const {url} = route.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    PokemonApi.get(url)
      .then((pokemonResponse) => {
        if (pokemonResponse && pokemonResponse.data) {
          setPokemon(pokemonResponse.data);
        }
      })
      .catch(() => {
        Alert.alert('Mensaje', 'Ocurrio un error al obtener la información.');
      });
  }, [url]);

  const goEvolution = () => {
    PokemonApi.getSpecies(pokemon.id)
      .then((species) => {
        if (
          species &&
          species.data &&
          species.data.evolution_chain &&
          species.data.evolution_chain.url
        ) {
          getEvolutions(species.data.evolution_chain.url);
        }
      })
      .catch(() => {
        Alert.alert('Mensaje', 'Ocurrio un error al obtener la información.');
      });
  };

  const getEvolutions = (urlEvolution) => {
    PokemonApi.get(urlEvolution)
      .then((evolution) => {
        if (
          evolution &&
          evolution.data &&
          evolution.data.chain &&
          evolution.data.chain.evolves_to &&
          evolution.data.chain.evolves_to.length
        ) {
          const list = [
            evolution.data.chain.species,
            evolution.data.chain.evolves_to[0].species,
          ];
          if (
            evolution.data.chain.evolves_to[0].evolves_to &&
            evolution.data.chain.evolves_to[0].evolves_to.length
          ) {
            list.push(evolution.data.chain.evolves_to[0].evolves_to[0].species);
          }
          navigation.navigate('evolution', {
            list,
          });
        } else {
          Alert.alert('Mensaje', 'No evoluciona');
        }
      })
      .catch(() => {
        Alert.alert('Mensaje', 'Ocurrio un error al obtener la información.');
      });
  };

  return (
    <ScrollView style={styles.container}>
      {pokemon && pokemon.id && (
        <>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.sprites.other['official-artwork'].front_default,
            }}
          />
          <Sprites {...pokemon.sprites} />
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} />
          <Stats stats={pokemon.stats} />
          <View style={styles.evolutionContainer}>
            <Button title="Evoluciones" onPress={goEvolution} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  evolutionContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
