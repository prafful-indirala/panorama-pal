import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function MyBottomTabs() {
  return (
    <View style={styles.chevron}>
      {/* <View style={styles.chevronMain} /> */}
      <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
      <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
      {/* <View style={[styles.chevronTriangle, styles.chevronBottomLeft]} /> */}
      {/* <View style={[styles.chevronTriangle, styles.chevronBottomRight]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  chevron: {
    width: '100%',
    height: 90,
  },
  chevronMain: {
    width: '100%',
    height: 90,
    backgroundColor: '#253238',
  },
  chevronTriangle: {
    backgroundColor: 'red',
    borderTopWidth: 40,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 170,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#253238',
    borderTopRightRadius: 10,
  },
  chevronTopLeft: {
    position: 'absolute',
    top: -40,
    left: 0,
  },
  chevronTopRight: {
    position: 'absolute',
    top: -40,
    right: 0,
    transform: [{ scaleX: -1 }],
  },
  chevronBottomLeft: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    transform: [{ scale: -1 }],
  },
  chevronBottomRight: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    transform: [{ scaleY: -1 }],
  },
});
