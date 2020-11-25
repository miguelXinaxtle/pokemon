import React from 'react';
import {FlatList} from 'react-native';
import {array, func} from 'prop-types';
import {ListEmpty, Separator} from 'components';
import PokemonItem from './PokemonItem';

const PokemonList = ({list, goPokemon}) => {
  const keyExtractor = (item, index) => index.toString();
  const renderEmpty = () => <ListEmpty text="No hay elementos." />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => (
    <PokemonItem {...item} goPokemon={() => goPokemon(item)} />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      ItemSeparatorComponent={itemSeparator}
      ListEmptyComponent={renderEmpty}
      renderItem={renderItem}
    />
  );
};

PokemonList.propTypes = {
  list: array,
  goPokemon: func,
};

export default PokemonList;
