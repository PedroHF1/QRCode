import { CameraView, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [modalVisible, setModalVisible] = useState(false);
const [permission, requestPermission] = useCameraPermissions();

const qrCodeLock = useRef(false);

const handleOpenCamera = async () => {
try {
  const {granted} = await requestPermission();

  if (!granted) {
    return Alert.alert('Camera', 'Permissão negada para acessar a camera')
  }
  setModalVisible(true);
  qrCodeLock.current = false;
} catch (error) {
  console.log(error);
}
}

function handleBarcodeScanned(data: string) {
  console.log(data);
  setModalVisible(false);
  Alert.alert('QR Code', data);
}

  return (
    <View style={styles.container}>
      <Button title='ler QR Code' onPress={handleOpenCamera} />

<Modal visible={modalVisible} style={{flex: 1}}>
      <CameraView  style={{flex: 1}}  facing='back' onBarcodeScanned={({data}) => {
        if (data && !qrCodeLock.current) {
          qrCodeLock.current = true;
         setTimeout(() => handleBarcodeScanned(data), 500);
        }
      }}/>
      </Modal>

      <View style={styles.footer}>
        <Button title='Fechar' onPress={() => setModalVisible(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    right: 32,
  }
});
