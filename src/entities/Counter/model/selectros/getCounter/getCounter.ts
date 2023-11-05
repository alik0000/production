import { SchemaStore } from 'app/providers/store/types/SchemaStore'
import { CounterSchema } from '../../types/CounterSchema'
export const getCounter = (state: SchemaStore): CounterSchema => state.counter
