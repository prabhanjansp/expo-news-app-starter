import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
     <View style={styles.searchbar}>
        <Ionicons name='search-outline' size={24} color={Colors.black}/>
        <TextInput placeholder='Search news' placeholderTextColor={Colors.black} style={styles.seachText} autoCapitalize='none'/>
     </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginBottom:20


    },
    searchbar:{
        backgroundColor:"#e3e3e3",
        // elevation:5,
        padding:12,
        borderRadius:10,
        flexDirection:'row', gap:10,
    },
    seachText:{
flex:1,
fontSize:14,
color:Colors.darkGrey
    }
})