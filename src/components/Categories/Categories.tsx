import React from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  handleSelectCategory: (category: string) => void;
}

function Categories({
  categories,
  selectedCategory,
  handleSelectCategory,
}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => handleSelectCategory(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? {marginLeft: 18} : {},
              index === categories.length - 1 ? {marginRight: 18} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

export default React.memo(Categories);
