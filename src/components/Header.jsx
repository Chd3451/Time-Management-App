import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native";

const options = ["Pomodoro", "Short Break", " Long Breack"];

export default function Header ({currentTime, setCurrentTime, setTime}){ 

  function handlesPress(index) {
    const newtime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newtime * 60);
  }

    return(
        <View style={{flexDirection: "row"}}>
         {options.map((item, index) => (
           <TouchableOpacity key={index} 
           onPress={() => handlesPress(index)} 
           style={[styles.itemStyle, currentTime !==index && { borderColor: "transparent"}
        ]}
            >
             <Text style={{fontWeight: "bold"}}>{item}</Text>
           </TouchableOpacity>
    ))}
        </View>
    );
}
   
const styles = StyleSheet.create({
itemStyle: {
    width: "33%",
    alingItems: "center",
    borderWidth: 3, 
    padding: 5, 
    borderColor: "white",
    marginVertical: 20,
}

})