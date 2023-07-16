import { InferSchemaType } from 'mongoose';
import { proxySchema } from '../db-models/proxy.dbmodel';

export type Proxy = InferSchemaType<typeof proxySchema>;