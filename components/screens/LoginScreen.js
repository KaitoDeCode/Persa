import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { studyImg } from '../../assets/images'

const LoginScreen = () => {
  return (
    <View className="flex flex-1">
        <View className="w-full h-[55vh] bg-sky-600 rounded-b-3xl flex items-center justify-center flex-col">
            <Image
                source={studyImg}
                className="w-52 h-52 object-cover"
            />
            <Text className="text-white text-6xl font-bold">Si Persa</Text>
            <Text className="text-white">Aplikasi perpustakaan SMKN 1 Mejayan</Text>
        </View>
        <View className="p-5">
            <Text className="text-sky-600 text-2xl font-bold">Login</Text>
            <Text className="text-slate-400 mb-4">Login menjadi pelanggan perpustakaan</Text>
            <TextInput className="border rounded-xl py-1 px-3 " placeholder='Email'/>
            <TextInput className="border rounded-xl py-1 px-3 mt-3" keyboardType='default' secureTextEntry={true} placeholder='Password'/>
            <TouchableOpacity className="bg-sky-600 rounded-lg py-3 mt-5">
                <Text className="text-center font-semibold text-white ">Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-5">
                <Text className="text-center text-slate-500">Belum menjadi anggota perpustakaan?<Text className="text-sky-600 font-bold"> Daftar!</Text></Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen