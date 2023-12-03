import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const getProfileData = createSelector((state: SchemaStore) => state.profile, ({ data }) => data)
