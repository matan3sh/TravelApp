import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
}

function Categories({categories, selectedCategory}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item}) => {
        const selected = selectedCategory === item;

        return (
          <View
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
}

export default React.memo(Categories);
