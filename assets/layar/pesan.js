import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const Pesan = ({navigation,route})=> {
    const {awal,tujuan,layan,tanggal,jam} = route.params
    return(
    <SafeAreaView style={edit.bg}>
        <View style={edit.bg1}>
            <Text style={edit.Text}>
                Daftar Pemesanan
            </Text>
        </View>
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
            <TouchableOpacity style={edit.button1} onPress={() => navigation.navigate('Batal',route.params)}>                                        
                <Text style={edit.txt1}>
                    Batalkan
                </Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

const edit = StyleSheet.create({
    bg:{
        backgroundColor: "white",
        flex : 1,
        alignItems:"center"
    },
    txt1 :{
        marginLeft:10,
        color : 'white',
        fontWeight : 'bold',
        peddingTop:5,        
    },
    button1:{
        backgroundColor :"red",
        width : 75,
        marginTop:10,
        flexDirection : "row",
        height : 30,
        borderRadius : 5,
        alignItems :"center",
    },
    Text :{
        marginTop:20,
        color : "white",
        fontWeight : 'bold',
        fontSize : 25,
        fontStyle:'italic',
        
    },
    bg1:{
        backgroundColor:'#00579c',
        width :400,
        height:75,
        alignItems : "center",
    },
    a :{
        alignSelf :'flex-start',
        marginTop:10,
        fontWeight :'bold',
        fontSize :15,
    },
    kotak1:{
        marginTop :30,
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
    
})
export default Pesan;