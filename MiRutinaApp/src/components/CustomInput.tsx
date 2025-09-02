import { useState } from "react";
import React = require("react");
import { View, Text, TextInput, StyleSheet, KeyboardType, KeyboardTypeOptions } from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";


type Props = {
    value:string;
    tittle:string;
    type?:'text' | 'password' | 'email'| 'number'| 'numeric';
    onChange: (text: string) => void;
    required?: boolean;
}

export default function CustomInput ({value, tittle, type="text", onChange, required}: Props){
    const isPasswordField = type === 'password';
    const [issecuetext, setItSecureTex]=useState(type==='password');
    const keyboardType: KeyboardTypeOptions = type === 'email' ? 'email-address' :
        type === 'number' ? 'numeric' :
        type === 'numeric' ? 'decimal-pad' :
        'default';
    const getError =()=>{
        if (required && !value) return "El campo es obligatorio";
        if (type === 'email' && !value.includes("@")) return "Correo invalido";
        if (type === 'password' && value.length < 4) return "Contraseña mas fuerte";
    }
    const Styles = StyleSheet.create({
        input: {
           
            paddingVertical: 10,
            fontSize: 16,
            color: 'black',
            borderColor: 'black',
        },
        error: {
            color: 'red',
            fontSize: 12,
        },
        inputError: {
            borderColor: 'red',
            borderWidth: 1,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            paddingHorizontal: 12,
            backgroundColor: 'white',
        },
    });


    const error = getError();
    return (
        <View>
            <View style={[Styles.inputContainer, error && Styles.inputError]}>
                 <TextInput
                    placeholder={tittle}
                    value={value}
                    onChangeText={onChange}
                    style={Styles.input}
                    secureTextEntry={issecuetext}
                    keyboardType={keyboardType}
                />
                {
                    isPasswordField && (
                        <Icon
                            name={issecuetext ? "visibility-off" : "visibility"}
                            size={20}
                            color="black"
                            onPress={() => setItSecureTex(!issecuetext)}
                        />
                    )
                }
            </View>
            <Text>{error}</Text>
        </View>
    );
};


