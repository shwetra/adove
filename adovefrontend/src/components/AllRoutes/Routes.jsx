import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from '../UserList'
import User from '../User'
import UserAnalytics from '../UserAnalytics'
import PostList from '../PostList'
import PostAnalytics from '../PostAnalytics'
import PostCreate from '../PostContent'
import Allpost from '../AllPost'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Allpost/>}/>
    <Route path='/alluser' element={<UserList/>}/>
    <Route path='/create' element={<User/>}/>
    <Route path='/allpost' element={<PostList/>}/>
    <Route path='/post' element={<PostCreate/>}/>
    <Route path='/UserAnalytics' element={<UserAnalytics/>}/>
    <Route path='/PostAnalytics' element={<PostAnalytics/>}/>
   </Routes>
  )
}
