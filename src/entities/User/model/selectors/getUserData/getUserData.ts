import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const getUserData = createSelector((state: SchemaStore) => state.user, (data) => data.user)
