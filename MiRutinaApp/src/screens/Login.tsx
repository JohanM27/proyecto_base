import { Alert, View } from "react-native";
import CustomButton from "../components/CustomButton";
import React = require("react");
import CustomInput from "../components/CustomInput";

const { useState } = React;

export default function Login ({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeEmail = (email: string) => {    
        setEmail(email);
    };

    const handleOnChangePassword = (pwd: string) => {
        setPassword(pwd);
    };

    const handleLogin = () => {
        try {
            if (!email || !password) {
                Alert.alert('Error', 'Por favor llene todos los campos');
                return;
            }
            navigation.navigate('HomeScreen', email);
        } catch (error: any) {
            
        }
    };

    return (
        <View>
            <CustomInput
                type="email"
                value={email}
                tittle="Correo Electrónico"
                onChange={handleOnChangeEmail}
            />
            <CustomInput
                type="password"
                value={password}
                tittle="Contraseña"
                onChange={handleOnChangePassword}
            />
            <CustomButton title="Iniciar Sesion" onPress={handleLogin} />
            <CustomButton title="Registrarme" onPress={() => navigation.navigate('RegistroScreen')} variant="secondary" />
            <CustomButton title="Olvide mi contraseña" onPress={() => {}} variant="tertiary" />
        </View>
    );
}