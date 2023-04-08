import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Categories from '../../components/Categories/Categories';
import Title from '../../components/Title/Title';
import {styles} from './styles';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={'All'}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
            'Others',
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
