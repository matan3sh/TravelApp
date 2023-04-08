import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import AttractionCard from '../../components/AttractionCard/AttractionCard';
import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
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

        <View style={styles.row}>
          <AttractionCard
            title="Enertainment Park"
            subtitle="Rome"
            imageSrc={
              'https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg'
            }
          />
          <AttractionCard
            title="Enertainment Park"
            subtitle="Rome"
            imageSrc={
              'https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg'
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
