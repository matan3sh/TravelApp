import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

interface AttractionCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

function AttractionCard({imageSrc, title, subtitle}: AttractionCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export default React.memo(AttractionCard);
