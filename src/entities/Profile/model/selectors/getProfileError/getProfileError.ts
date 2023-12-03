import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const getProfileError = createSelector((state: SchemaStore) => state.profile, ({ error }) => error)
