import React from 'react';
import {View, StyleSheet} from 'react-native';

const CirclesBg = () => { /* Useless Circles */
  return (
    <>
      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />
    </>
  );
};

const styles = StyleSheet.create({
  circleOne: {
    width: 180,
    height: 180,
    backgroundColor: 'rgba(255,255,255, .2)',
    borderColor: 'rgba(255, 255, 255, .6)',
    borderWidth: 1,
    borderRadius: 360,
    left: 200,
    top: 80,
  },
  circleTwo: {
    left: -100,
    top: 120,
    width: 240,
    height: 240,
    backgroundColor: 'rgba(255,255,255, .2)',
    borderColor: 'rgba(255, 255, 255, .6)',
    borderWidth: 1,
    borderRadius: 360,
  },
});

export default CirclesBg;
