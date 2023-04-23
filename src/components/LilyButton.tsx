import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {lilyArray} from '../store/lilyArray';

function LilyButton({
  index,
  onClick,
  state,
}: {
  index: number;
  onClick: () => void;
  state: boolean;
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onClick()}
        style={state ? styles.unClickedbutton : styles.Clickedbutton}>
        <Image style={styles.image} source={lilyArray[index].src} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Clickedbutton: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    backgroundColor: 'white',
    shadowColor: '#8d8d8d',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    alignItems: 'center',
    margin: '5%',
  },
  image: {
    height: 80,
    width: 80,
    marginVertical: '5%',
    marginHorizontal: '2%',
  },
  unClickedbutton: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    backgroundColor: '#efefef',
    shadowColor: '#8d8d8d',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    alignItems: 'center',
    margin: '5%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777777',
    textAlign: 'center',
  },
});

export default LilyButton;
