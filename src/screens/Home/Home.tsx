import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

import AttractionCard from '../../components/AttractionCard/AttractionCard';
import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import {Attraction} from './Home.config';

import attraction from '../../data/attractions.json';
import categories from '../../data/categories.json';

import {styles} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [attractionData, setAttractionData] = useState<Attraction[]>([]);

  useEffect(() => {
    setAttractionData(attraction);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setAttractionData(attraction);
    } else {
      const filteredData = attraction.filter(item =>
        item.categories.includes(selectedCategory),
      );
      setAttractionData(filteredData);
    }
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Attraction>
        style={styles.flatList}
        numColumns={2}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go?" />

              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>

            <Categories
              selectedCategory={selectedCategory}
              categories={categories}
              handleSelectCategory={handleSelectCategory}
            />
          </>
        }
        data={attractionData}
        keyExtractor={attraction => String(attraction.id)}
        ListEmptyComponent={<Text style={styles.notFound}>No Items Found</Text>}
        renderItem={({item}) => (
          <AttractionCard
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images[0]}
            onPress={() =>
              navigation.navigate('AttractionDetails', {attractionId: item.id})
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
