import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc(props){
    return(
        <View style={styles.resultadoImc}>
            <Text style={styles.result}>{props.messageResultImc}</Text>
            <Text style={styles.resultCalc}>{props.ResultImc}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    result:{
        color:'#fff',
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center',

    },
    resultCalc:{
        color:'#0f4',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
    },
    resultadoImc:{
        height:100,
    }
});
  