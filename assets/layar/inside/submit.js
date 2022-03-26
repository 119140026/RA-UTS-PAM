import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Submit = ({navigation,route})=> {
    const {awal,tujuan,layan,tanggal,jam} = route.params
    return(
    <SafeAreaView style={edit.bg}>
      <View style={edit.box}>
        <Text style={edit.Text}>
        Kapal Skuy
        </Text>
        <Text style={edit.a}>
            Informasi Pemesanan
        </Text>
        <View style={edit.kotak1}>
            <Text style={edit.c}>
                {awal}   <Icon name={'arrow-forward'} size={30} color={'black'}/>     {tujuan}
            </Text>
            <Text style={edit.d}>
                Jadwal Masuk Pelabuhan
            </Text>
            <Text style={edit.e}>
                {tanggal}
            </Text>
            <Text style={edit.e}>
                {jam}
            </Text>
            <Text style={edit.d}>
                Layanan
            </Text>
            <Text style={edit.e}>
                {layan}
            </Text>
            <View style={{borderBottomColor:'black',borderBottomWidth:2,width:'100%',marginVertical:10}}/>
            <Text style={edit.e}>
                Dewasa x 1                                        Rp 50.000
            </Text>
        </View>
        <Text style={edit.a}>
            Data Pemesanan
        </Text>
        <Text style={edit.teks}>
            Nama Lengkap
        </Text>
        <View style={edit.z}>
          <TextInput style={edit.input} placeholder="Malew">
          </TextInput>
        </View>
        <Text style={edit.teks}>
            Identitas
        </Text>
        <View style={edit.z}>
          <TextInput style={edit.input} placeholder="Perempuan">
          </TextInput>
        </View>
        <Text style={edit.teks}>
            Umur
        </Text>
        <View style={edit.z}>
          <TextInput style={edit.input} placeholder="20 tahun">
          </TextInput>
        </View>
        <TouchableOpacity style={edit.k} onPress={() => {
                navigation.popToTop()
                navigation.navigate('Pesan',route.params)}}>             
            <Text style={edit.txt1}>
                Submit
            </Text>
        </TouchableOpacity>
        <Text style ={edit.copy}>
            Muhammad Asyroful Nur Maulana Yusuf - 119140026
        </Text>
      </View>
    </SafeAreaView>
  )
}

const edit = StyleSheet.create({
    bg:{
        backgroundColor: "#00579c",
        flex : 1,
        alignItems:"center"
    },
    Text :{
        color : "#00579c",
        fontWeight : 'bold',
        fontSize : 30,
        fontStyle:'italic'
    },
    box:{
        marginTop : 30,
        width :300,
        alignItems : "center",
        backgroundColor :"white",
        paddingVertical : 20,
        paddingHorizontal : 18,
        borderRadius : 5,
        shadowOpacity : 1,
        shadowRadius : 5
    },
    a :{
        alignSelf :'flex-start',
        marginTop:10,
        fontWeight :'bold',
        fontSize :15,
    },
    kotak1:{
        marginTop :10,
        width :270,
        alignItems : "center",
        backgroundColor :"#f0f0f0",
        paddingVertical : 10,
        paddingHorizontal : 18,
        borderRadius : 5,
        borderWidth: 1,
    },
    c:{
        fontSize : 17,
        fontWeight : "bold",
        alignSelf :'flex-start',
    },
    d :{
        alignSelf :'flex-start',
        marginBottom : 5,
        fontWeight :'bold',
        fontSize :12,
        marginTop:10,
    },
    e :{
        alignSelf :'flex-start',
        fontSize :11,
    },
    teks :{
        alignSelf :'flex-start',
        marginTop:5,
        marginBottom : 2,
        fontSize :12,
    },
    z:{
        flexDirection : "row",
        height : 30,
        width : 400,
        marginLeft:100       
    },
    input:{
        justifyContent: 'center',
        marginLeft :20,
        backgroundColor :"#f0f0f0",
        borderRadius : 5,
        width :260,
        fontWeight:"bold",
        paddingLeft :10,
    },
    k:{
        backgroundColor :"orange",
        width : 150,
        marginTop : 20,
        flexDirection : "row",
        height : 35,
        borderRadius : 5,
        alignItems :"center",
    },
    txt1 :{
        marginLeft:50,
        color : 'white',
        fontWeight : 'bold',
        
    },
    copy:{
        color : "#00579c",
        fontWeight : 'bold',
        fontSize : 10,
        marginTop :10,
    }
})

export default Submit;