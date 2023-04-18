import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { RootStackParamList } from "../../AppInner";

type Q1ScreenProps = NativeStackScreenProps<RootStackParamList,"Q1">;

function Q1({ navigation }: Q1ScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Q2. 힘든 일이 있을 때 어떻게 극복하는 편인가요?
      </Text>

      <Image
        style={styles.image}
        source={{
          uri:
            "https://user-images.githubusercontent.com/86648265/232454342-f172d4b7-0c91-401c-9223-a1833385115d.png",
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Q2")}
        style={styles.button}>
        <Text style={styles.buttonText}>
          친구들한테 얘기하면서 극복하는 편이야
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Q2")}
        style={styles.button}>
        <Text style={styles.buttonText}>
          혼자 극복할 수 있는 방법을 찾아보려고 하는 편이야
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBack}>
        <Text style={styles.goBackText}>이전으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  question: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 70,
    marginVertical: 20,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#a5a5a5',
    width: 120,
    padding: 8,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: '#777777',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  goBack: {
    position: 'absolute',
    bottom: 15,
  },
  goBackText: {
    color: '#8d8d8d',
  },
});

export default Q1;
