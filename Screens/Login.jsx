import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Button,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { themeImages } from "../theme/assets";
import { themeColor } from "../theme/colors";

const Login = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,

    Poppins_500Medium,

    Poppins_600SemiBold,

    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNavigateToSignUp = () => {
    navigation.navigate("signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={themeImages.bg}
      >
         <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={styles.backIcon} name="chevron-back-outline" />
        </TouchableOpacity>

        <View style={styles.parentContainer}>
          <Text style={styles.hiText}>Log in</Text>
          <BlurView tint="dark" intensity={90} style={styles.mainContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileimage}
                resizeMode="contain"
                source={themeImages.avtar}
              />
              <View style={styles.profileContainerTExt}>
                <Text style={styles.labelText2}>Jhon Doe</Text>
                <Text style={styles.labelText}>acharnabin@gmail.com</Text>
              </View>
            </View>
            <View>
              <TextInput style={styles.textInput} placeholder="Password" />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgetPass}>Forget your password?</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.black,
    display: "flex",
    justifyContent: "center",
  },

  imageBackground: {
    flex: 1,

    position: "relative",
  },
  parentContainer: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    padding: 15,
  },
  backIcon: {
    color: themeColor.white,
    fontSize: 35,
  },
  mainContainer: {
    padding: 15,
    borderRadius: 15,
  },

  hiText: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 45,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
  labelText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    letterSpacing:1.2
  },
  labelText2: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 18,
  },
  profileContainerTExt: {
    marginLeft: 20,

  },
  profileimage: {
    width: 40,
    height: 40,
  },

  textInput: {
    backgroundColor: themeColor.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: themeColor.primary,
    borderRadius: 8,
    padding: 12,
  },
  forgetPass: {
    color: themeColor.primary,
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    marginVertical: 10,
  },
});
