import * as React from "react";
import { Text, View } from "react-native";

export default function Registro({ navigation, route }: any) {
    const { correo } = route.params || {};

    return (
        <View>
            <Text>Bienvenido {correo ? correo : "usuario"}, estás en la pantalla de registro</Text>
        </View>
    );
}