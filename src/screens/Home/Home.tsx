import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import AttractionCard from '../../components/AttractionCard/AttractionCard';
import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import attraction from '../../data/attractions.json';
import {Attraction} from './Home.config';
import {styles} from './styles';

const categories = [
  'All',
  'Popular',
  'Historical',
  'Random',
  'Trending',
  'Exclusive',
  'Others',
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [attractionData, setAttractionData] =
    useState<Attraction[]>(attraction);

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
        renderItem={({item}) => (
          <AttractionCard
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images[0]}
          />
        )}
      />
    </SafeAreaView>
  );
}
