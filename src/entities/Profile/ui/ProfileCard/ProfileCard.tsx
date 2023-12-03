import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileAsyncThunk } from '../../model/services/profileAsyncThunk/profileAsyncThunk'
import { getProfileData } from '../../model/selectors'

export const ProfileCard: FC = () => {
  const dispatch = useDispatch()
  const { userName, firstName, lastName, age, city, country, socials } = useSelector(getProfileData)

  useEffect(() => {
    dispatch(profileAsyncThunk(null))
  }, [dispatch])

  return (
    <div>
        <h4>UserName: {userName}</h4>
        <h4>firstName: {firstName}</h4>
        <h4>lastName: {lastName}</h4>
        <h4>age: {age}</h4>
        <h4>city: {city}</h4>
        <h4>country: {country}</h4>
        <div>
            <h4>socials: {socials?.name}</h4>
        </div>
    </div>
  )
}
