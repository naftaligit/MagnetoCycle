import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor(private bluetoothSerial: BluetoothSerial) {
    // Write a string
    this.bluetoothSerial.write('hello world').then((success) => {
      console.log('success', success);
    });

    // Array of int or bytes
    this.bluetoothSerial.write([186, 220, 222]).then((success) => {
      console.log('success', success);
    });

    this.bluetoothSerial.read().then((data)=>{
      console.log("data",data);
      
    });
  
  }
}
