import React, { useState } from "react";
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Picker } from '@react-native-picker/picker'

const Tab = createBottomTabNavigator();

const home =({navigation})=> {
  const [awal,setAwal]=useState('');
  const [tujuan,setTujuan]=useState('');
  const [layan,setLayan]=useState('');
  const [tanggal,setTanggal]=useState('');
  const [jam,setJam]=useState('');

  const buat = () => {
    if(awal.trim()==='')return
    if(tujuan.trim()==='')return
    if(awal===tujuan)return
    if(layan.trim()==='')return
    if(tanggal.trim()==='')return
    if(jam.trim()==='')return
    navigation.push('Tiket',{
      awal,
      tujuan,
      layan,
      tanggal,
      jam,
    });
  };

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.box}>
        <Text style={styles.Text}>
          Kapal Skuy
        </Text>

        <Text style={styles.judul
    }>
          Pelabuhan Awal
        </Text>

        <View style={styles.iconbox}>
          <Icon name={'boat-outline'} size={28} color='#00579c'/>
          <Picker 
            style={styles.textInput}
            selectedValue={awal}
            onValueChange={(itemValue) => setAwal(itemValue)}
          >
            <Picker.Item label='Pilih Pelabuhan' value=''/>
            <Picker.Item label='Merak' value='Merak'/>
            <Picker.Item label='Bakauheni' value='Bakauheni'/>
            <Picker.Item label='Ketapang' value='Ketapang'/>
            <Picker.Item label='Kamal' value='Kamal'/>
          </Picker>
        </View>

        <Text style={styles.judul
    }>
          Pelabuhan Tujuan
        </Text>

        <View style={styles.iconbox}>
          <Icon name={'boat-outline'} size={28} color='#00579c'/>
          <Picker 
            style={styles.textInput}
            selectedValue={tujuan}
            onValueChange={(itemValue) => setTujuan(itemValue)}
          >
            <Picker.Item label='Pilih Pelabuhan' value=''/>
            <Picker.Item label='Merak' value='Merak'/>
            <Picker.Item label='Bakauheni' value='Bakauheni'/>
            <Picker.Item label='Ketapang' value='Ketapang'/>
            <Picker.Item label='Kamal' value='Kamal'/>
          </Picker>
        </View>

        <Text style={styles.judul
    }>
          Kelas Layanan
        </Text>

        <View style={styles.iconbox}>
          <Icon name={'man-outline'} size={28} color='#00579c'/>
          <Picker 
            style={styles.textInput}
            selectedValue={layan}
            onValueChange={(itemValue) => setLayan(itemValue)}
          >
            <Picker.Item label='Pilih Layanan' value=''/>
            <Picker.Item label='Express' value='Express'/>
            <Picker.Item label='Reguler' value='Reguler'/>
          </Picker>
        </View>
        
        <Text style={styles.judul
    }>
          Tanggal masuk Pelabuhan
        </Text>

        <View style={styles.iconbox}>
          <Icon name={'calendar-outline'} size={28} color='#00579c'/>
          <Picker 
            style={styles.textInput}
            selectedValue={tanggal}
            onValueChange={(itemValue) => setTanggal(itemValue)}
          >
            <Picker.Item label='Pilih Tanggal' value=''/>
            <Picker.Item label='Minggu, 12 Juli 2022' value='Minggu, 12 Juli 2022'/>
            <Picker.Item label='Senin, 13 Juli 2022' value='Senin, 13 Juli 2022'/>
            <Picker.Item label='Selasa, 14 Juli 2022' value='Selasa, 14 Juli 2022'/>
            <Picker.Item label='Kamis, 17 Juli 2022' value='Kamis, 17 Juli 2022'/>
          </Picker>
        </View>

        <Text style={styles.judul
    }>
          Jam masuk Pelabuhan
        </Text>

        <View style={styles.iconbox}>
          <Icon name={'time-outline'} size={28} color='#00579c'/>
          <Picker 
            style={styles.textInput}
            selectedValue={jam}
            onValueChange={(itemValue) => setJam(itemValue)}
          >
            <Picker.Item label='Pilih Jam' value=''/>
            <Picker.Item label='12.00' value='12.00'/>
            <Picker.Item label='15.00' value='15.00'/>
            <Picker.Item label='18.00' value='18.00'/>
            <Picker.Item label='21.00' value='21.00'/>
          </Picker>
        </View>
        <Text style={styles.judul
    }>
          Jumlah Penumpang
        </Text>
        <View style={styles.iconbox}>
          <Icon name={'people'} size={28} color='#00579c'/>
          <Text
            style={styles.textInput}
            >
              1 Orang Dewasa
          </Text>
        </View>
        
        <TouchableOpacity style={styles.Touchable} onPress={() => buat()}>
          <View style={styles.Tombol}>
            <Icon name={'search-outline'} size={28} color={'#ffffff'}/>
          </View>
        
          <Text style={styles.TextTombol}>
            Buat Tiket
          </Text>
        </TouchableOpacity>
        <Text style ={styles.copy}>
        Muhammad Asyroful Nur Maulana Yusuf - 119140026
        </Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#00579c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box :{
    marginTop :10,
    width : 300,
    backgroundColor :'white',
    alignItems : 'center',
    paddingVertical :10,
    paddingHorizontal :18,
    borderRadius : 5,
    shadowRadius :10,    
  },
  Text :{
    color : "#00579c",
    fontWeight : 'bold',
    fontSize : 30,
    marginBottom :20,
    fontStyle:'italic'
  },
  iconbox :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  judul:{
    alignSelf :'flex-start',
    fontStyle :'normal'
  },
  textInput:{
    justifyContent: 'center',
    marginLeft :20,
    backgroundColor :"#f0f0f0",
    borderRadius : 5,
    width :260,
    fontWeight:"bold",
    paddingLeft :10,
  },
  Touchable:{
    backgroundColor :"blue",
    width : 150,
    marginTop : 20,
    flexDirection : "row",
    height : 40,
    borderRadius : 5,
    alignItems :"center"
  },
  TextTombol :{
    marginLeft :10,
    color : 'white',
    fontWeight : 'bold'
  },
  Tombol:{
    marginLeft : 10,
  },
  copy:{
    color : "#00579c",
    fontWeight : 'bold',
    fontSize : 10,
    marginTop :20,
  }
});
export default home;