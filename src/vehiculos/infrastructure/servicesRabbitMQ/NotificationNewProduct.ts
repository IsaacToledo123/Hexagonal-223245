import { INotificationNewVehiculo } from "../../domain/services/INotificationNewVehiculo";
import { Vehiculo } from "../../domain/vehiculo";
import amqplib from 'amqplib'


export class NotificationNewProduct implements INotificationNewVehiculo{
   async sendNotification(vehiculo: Vehiculo): Promise<boolean> {
        let ex="upchiapas.as"
        const conn= await amqplib.connect("amqps://qakfowzk:IsMiLJTYKEnM3R-VbC0NNqTHxzkABCCa@shrimp.rmq.cloudamqp.com/qakfowzk");
        const ch=await conn.createChannel()
        const mensaje = JSON.stringify(vehiculo);
       const status= await ch.publish(ex,'',Buffer.from(mensaje))

       return status;
    }//
}