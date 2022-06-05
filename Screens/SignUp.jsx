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

const SignUp = ({ navigation }) => {
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
          <Text style={styles.hiText}>Sign Up</Text>

          <BlurView tint="dark" intensity={90} style={styles.mainContainer}>
            <Text style={styles.labelText}>
              Looks like you dont't have an account.
              {"\n"}Lets create a new
              account.
            </Text>
            <Text style={styles.labelText2}>acharnabin@gmail.com</Text>
            <View>
              <TextInput style={styles.textInput} placeholder="Name" />
              <TextInput style={styles.textInput} placeholder="Password" />

              <View>
                <Text style={styles.lastTextContainerText1}>
                  By selecting Agreee and Continue below,
                </Text>
                <TouchableOpacity
                  style={styles.lastTextContainer}
                  onPress={handleNavigateToSignUp}
                >
                  <Text style={styles.lastTextContainerText1}>I agree to</Text>
                  <Text style={styles.lastTextContainerText2}>
                    Terms of service and Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Agree and Continue </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

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
    bottom: 20,
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
  socialLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: themeColor.white,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  socialLoginimage: {
    height: 35,
    width: 35,
    paddingHorizontal: 30,
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
    marginTop: 15,
    letterSpacing:1.5
  },
  labelText2: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    marginBottom: 15,
  },
  socialText: {
    marginLeft: 20,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  textInput: {
    backgroundColor: themeColor.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 13,
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
  lastTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginVertical: 10,
  },
  lastTextContainerText1: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  lastTextContainerText2: {
    color: themeColor.primary,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    marginLeft: 5,
  },
});
