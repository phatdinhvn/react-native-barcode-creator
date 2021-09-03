import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import BarcodeCreatorViewManager, { BarcodeFormat } from 'react-native-barcode-creator';

export default function App() {
  console.warn(BarcodeFormat)
  return (
    <View style={styles.container}>
      <BarcodeCreatorViewManager
        value={"5901234123457"}
        background={"#FFFFFF"}
        foregroundColor={"#000000"}
        format={BarcodeFormat.QR}
        style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    marginVertical: 20,
  },
});
