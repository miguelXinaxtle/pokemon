import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import EvolutionList from './EvolutionList';

const EvolutionScreen = ({route}) => {
  const {list} = route.params;
  const [evolutionList, setEvolutionList] = useState([]);

  useEffect(() => {
    let evol = [];
    for (const item of list) {
      evol.push({
        name: item.name,
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          item.url.split('/')[6]
        }.png`,
      });
    }
    setEvolutionList(evol);
  }, [list]);

  return (
    <View style={styles.container}>
      <EvolutionList list={evolutionList} />
    </View>
  );
};

export default EvolutionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
