import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
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
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          categories={categories}
          handleSelectCategory={handleSelectCategory}
        />

        <ScrollView contentContainerStyle={styles.row}>
          {attractionData.map(attraction => (
            <AttractionCard
              key={attraction.id}
              title={attraction.name}
              subtitle={attraction.city}
              imageSrc={attraction.images[0]}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
