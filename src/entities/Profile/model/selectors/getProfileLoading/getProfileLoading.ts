import { createSelector } from '@reduxjs/toolkit'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

export const getProfileLoading = createSelector((state: SchemaStore) => state.profile, ({ loading }) => loading)
