import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import countries from '../data/CountriesData.js';
import { SvgUri } from 'react-native-svg';

export default function CountryScreen({ navigation }) {

  const [showLanguages, setShowLanguages] = useState(null);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput style={styles.searchField} placeholder='Search Country or Language'/> 
        <FlatList
            data={countries}
            renderItem={({item, index}) => 
            <View style={styles.country}>
                <TouchableOpacity 
                    style={styles.countryButton}
                    onPress={() => setShowLanguages(showLanguages !== index ? index : null)}
                >
                    <SvgUri 
                        uri={`https://hatscripts.github.io/circle-flags/flags/${item.landCode}.svg`} 
                        style={styles.flag}
                        width="40px"
                        height="40px"
                    />
                    <Text style={styles.title}>{item.country}</Text>
                </TouchableOpacity>
                {showLanguages === index ? 
                    <FlatList
                        style={styles.languages}
                        data={item.languages}
                        renderItem={({ item: language}) => 
                        <TouchableOpacity onPress={() => (navigation.navigate("Language"))}>
                            <Text style={styles.languageText}>{language}</Text>
                        </TouchableOpacity>
                        }
                        keyExtractor={index => index}
                    /> 
                : 
                    null
                }
            </View>
        }
        keyExtractor={item => item.landCode}
        />
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
  searchField: {
    color: "black",
    backgroundColor: "white",
    width: "80%",
    height: 40,
    padding: 20,
    left: '50%',
    marginVertical: 30,
    marginLeft: "-40%",
    borderRadius: 50
  },
  country: {
    margin: 10
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    color: 'black',
  },
  countryButton: {
    alignItems: "center",
    flexDirection: 'row',
  },
  flag: {
    marginRight: 10
  },
  languages: {
    marginLeft: 30,
    fontSize: 30,
    textAlign: "center"
  },
  languageText: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10
  }
});