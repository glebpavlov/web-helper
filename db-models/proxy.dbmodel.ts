import * as mongoose from 'mongoose';
import { Schema, Types } from 'mongoose';


export const proxySchema = new Schema(
    {
        type: {
            required: true,
            type: ['https' , 'socks5' , 'socks4' , 'http', String]
        },
        port: {
            type: Number,
            required: true
        },
        host: {
            unique: true,
            type: String,
            required: true
        },
        updated: {
            default: Date.now,
            type: Date
        }
    }
)

export const ProxyModel = mongoose.model('Proxy', proxySchema);


