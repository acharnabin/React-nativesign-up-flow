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

const Auth = ({navigation}) => {
  let [fontsLoaded] = useFonts({

    Poppins_400Regular,

    Poppins_500Medium,

    Poppins_600SemiBold,

    Poppins_700Bold,

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNavigateToSignUp=()=>{
    navigation.navigate('signup')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={themeImages.bg}
      >
        <View>
          <Ionicons style={styles.backIcon} name="chevron-back-outline" />
        </View>

        <View style={styles.parentContainer}>
          <Text style={styles.hiText}>Hi!</Text>
        <BlurView tint="dark" intensity={90} style={styles.mainContainer}>
          <View>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.button}>
              <Text style={styles.buttonText}>Continue </Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity style={styles.socialLogin}>
              <Image
                style={styles.socialLoginimage}
                resizeMode="contain"
                source={themeImages.fblogo}
              />
              <Text style={styles.socialText}>Continue with facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialLogin}>
              <Image
                style={styles.socialLoginimage}
                resizeMode="contain"
                source={themeImages.google}
              />
              <Text style={styles.socialText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialLogin}>
              <Image
                style={styles.socialLoginimage}
                resizeMode="contain"
                source={themeImages.apple}
              />
              <Text style={styles.socialText}>Continue with Apple</Text>
            </TouchableOpacity>

            <View style={styles.lastTextContainer}>
              <Text style={styles.lastTextContainerText1}>
                Dont have an account?
              </Text>
              <TouchableOpacity onPress={handleNavigateToSignUp}>
              <Text style={styles.lastTextContainerText2}>Sign up</Text>
              </TouchableOpacity>
            
            </View>

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

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.black,
    display:'flex',
    justifyContent:'center'
  },

  imageBackground: {
    flex: 1,
    
    position:'relative',
  },
  parentContainer:{
    position:'absolute',
    bottom:20,
    left:0,
    right:0,
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
    fontFamily: "Poppins_700Bold",
    fontSize: 45,
  },
  orText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    marginVertical: 10,
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
  lastTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    alignItems:'center'
  },
  lastTextContainerText1: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  lastTextContainerText2:{
    color: themeColor.primary,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginLeft:5
  }
});
