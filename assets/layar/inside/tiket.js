import {useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import {TouchableOpacity } from "react-native-web";

const Tiket =(props)=> {
    const {awal,tujuan,layan,tanggal,jam} = props.route.params
    return(
        <SafeAreaView style={edit.bg}>
            <View style={edit.box}>
                <Text style={edit.Text}>
                Kapal Skuy
                </Text>
                <Text style={edit.a}>
                  Kuota tersedia (100)
                </Text>
                <Text style={edit.b}>
                  Rincian Tiket
                </Text>
                <View style={edit.kotak1}>
                    <Text style={edit.c}>
                      {awal} <Icon name={'arrow-forward'} size={30} color={'black'}/>     {tujuan}
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
                <Text style={edit.f}>
                    Total                     Rp 50.000 
                </Text> 
                <View style={edit.iconbox}>
                    <TouchableOpacity style={edit.button1} onPress={() => props.navigation.goBack()}>                                        
                        <Text style={edit.txt1}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={edit.k} onPress={() => props.navigation.push('Submit',props.route.params)}>                                        
                        <Text style={edit.txt2}>
                            Lanjutkan
                        </Text>
                    </TouchableOpacity>
                </View>
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
        marginBottom :30,
        fontStyle:'italic'
    },
    box:{
        marginTop : 75,
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
        marginBottom : 8,
        fontWeight :'bold',
        fontSize :12,
    },
    b :{
        fontSize : 12,
        fontWeight : "bold",
        marginBottom : 10,
        alignSelf :'flex-start',
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
    f :{
        alignSelf :'flex-start',
        marginBottom : 10,
        marginTop:10,
        fontWeight :'bold',
        fontSize :20,
    },
    button1:{
        backgroundColor :"red",
        width : 100,
        marginTop : 5,
        flexDirection : "row",
        height : 35,
        borderRadius : 5,
        alignItems :"center",
        marginRight : 70,
    },
    k:{
        backgroundColor :"blue",
        width : 100,
        marginTop : 5,
        flexDirection : "row",
        height : 35,
        borderRadius : 5,
        alignItems :"center",
    },
    txt1 :{
        marginLeft:23,
        color : 'white',
        fontWeight : 'bold',        
    },
    txt2 :{
        marginLeft:18,
        color : 'white',
        fontWeight : 'bold',
        
    },
    iconbox :{
        flexDirection : "row",
        height : 30,
        width : 270,
        marginBottom:20,
    },
    copy:{
        color : "#00579c",
        fontWeight : 'bold',
        fontSize : 10,
        marginTop :5,
      }
}) 

export default Tiket;