import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {}

const Page = (props: Props) => {
  const {top:SafeTop}=useSafeAreaInsets();
  return (
    <View style={[styles.container,{paddingTop:SafeTop}]}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1   ,
}});