import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const getLoginValue = createSelector((state: SchemaStore) => state.login, (values) => values)
