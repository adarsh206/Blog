import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from "./features/blogs/blogsSlice"
import BlogReducer from './features/singleBlog/BlogSlice'
import filterReducer from './features/filter/filterSlice'
import relatedBlogsReducer from './features/relatedBlogs/relatedBlogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: BlogReducer,
    filter: filterReducer,
    relatedBlogs: relatedBlogsReducer
  },
})