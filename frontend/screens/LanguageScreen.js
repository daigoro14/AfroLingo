import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SectionList, FlatList, SafeAreaView } from 'react-native';
import countries from '../data/CountriesData.js';
import { SvgUri } from 'react-native-svg';

export default function LanguageScreen({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Language page</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2693',
  },
  content: {
    flex: 1,
  },
});