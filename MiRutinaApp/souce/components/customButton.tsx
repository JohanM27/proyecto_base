import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary'| 'tertiary';
};



export default function CustomButton ({title, onPress, variant='primary'}: Props) {
    return (
        <TouchableOpacity onPress={onPress}> 
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const getStyle = (variant: 'primary' | 'secondary' | 'tertiary') => {
    return StyleSheet.create({
        button: {
            padding: 12,
            margin: 10,
            borderRadius: 5,
                backgroundColor: 
                variant === 'primary' ? '#1c1c30' : 
                variant === 'secondary' ? '#65659c' : '#FFFFFF',
                borderWidth: variant === 'tertiary'? 1:0,
                borderColor: '#ccc'

            },
            Text:{
                color: variant=== "primary" || variant === "secondary" ?
                '#ededf7' : '#010117',
                fontWeight: 'bold',
            }
        });
    }