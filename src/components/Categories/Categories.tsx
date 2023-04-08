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
      style={styles.flatList}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => handleSelectCategory(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
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
