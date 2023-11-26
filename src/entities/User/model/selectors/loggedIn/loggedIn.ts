import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const loggedIn = createSelector((state: SchemaStore) => state.user, (user) => user.loggedIn)
