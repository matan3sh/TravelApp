import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface AttractionCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}

function AttractionCard({
  imageSrc,
  title,
  subtitle,
  onPress,
}: AttractionCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(AttractionCard);
