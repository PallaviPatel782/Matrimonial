import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import styles from "../StyleScreens/LoginStyle";

const Register = ({ navigation }) => {
    const HandleRegister = () => {
        navigation.navigate("Verification");
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../Images/LoginBackground.png")}
                style={styles.image}
            >
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text}>Signup</Text>
                    <Text style={styles.passwordText}>
                        Enter phone number to send one time Password
                    </Text>
                    <Text style={styles.phoneText}>
                    Phone Number
                    </Text>
                    <TextInput
                        style={styles.inputText}
                    />
                    <TouchableOpacity style={styles.button} onPress={HandleRegister}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Register;
