import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/organisms/header';
import Timer from './src/components/organisms/timer';
import StartStopButton from './src/components/atoms/start-stop-button';
import { Audio } from 'expo-av';

// Colores para el fondo
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  // Estados
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO");
  const [isActive, setIsActive] = useState(false);

  // Función para actualizar el tiempo
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking(prev => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  // Función para iniciar/parar el temporizador y reproducir el sonido
  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  // Función para reproducir el sonido
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/Click-00.mp3')
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: Platform.OS === 'android' && 30 }}>

        {/* Encabezado */}
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />

        {/* Temporizador */}
        <Timer time={time} />

        {/* Botón de inicio/paro */}
        <StartStopButton isActive={isActive} onPress={handleStartStop} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
