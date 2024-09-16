import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-3xl font-pblack">Aora ADSO!</Text>
    <StatusBar style='auto' />
    <Link href="/home" style={{ color: 'blue'}}>Home</Link>
    </View>
  )
}
