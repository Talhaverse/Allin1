import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


const home = () => {
  return (
    <View>

      <Text>homepage </Text>
      <Link href="/login">login</Link>

    </View>
  )
}

export default home