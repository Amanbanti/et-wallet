import {Text, View,StyleSheet} from 'react-native';
import {Link} from 'expo-router';
import { Image } from 'react-native';

export default function Index(){
  return(
    <View 
    style={styles.container}>
      <Text>Index Screen 2</Text>
      <Link href={"/about"}>About</Link>
      <Image 
      source={require("@/assets/images/favicon.png")}
      style={{width:200, height:200}}
      />

      <View>
        <Text>ET Wallet</Text>
        <Text>Version 1.0.0</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex:1, 
      justifyContent:'center', 
      alignItems:'center',
    }
})