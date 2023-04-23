import React, {useEffect} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';

function LilyButton({
  title,
  onClick,
  state,
}: {
  title: string;
  onClick: () => void;
  state: boolean;
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onClick}
        style={state ? styles.unClickedbutton : styles.Clickedbutton}>
        <Image style={styles.image} source={require('../assets/Lily.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Clickedbutton: {
    marginBottom: 10,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    backgroundColor: 'white',
    shadowColor: '#8d8d8d',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    marginVertical: '8%',
  },
  unClickedbutton: {
    marginBottom: 10,
    width: 200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#a5a5a5',
    borderColor: 'white',
    shadowColor: '#8d8d8d',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777777',
    textAlign: 'center',
  },
});

export default LilyButton;
