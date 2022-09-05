import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  searchValue:'',
  categoryId:0,
  currentPage:1,
  sort:{
    name: 'популярности(DESC)',
    sortProperty: 'rating'
  },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
   setCategoryId(state, action){
     state.categoryId = action.payload
   },
   setSearchValue(state, action){
     state.searchValue = action.payload
   },
    changeTypeSort(state,action){
      state.sort=action.payload
    },
    setPageCount(state,action){
      state.currentPage=action.payload
    },
    setFilters(state,action){
      state.sort = action.payload.sort;
      state.currentPage = action.payload.currentPage;
      state.categoryId = action.payload.categoryId;
    }
  },
})

export const { setCategoryId,changeTypeSort,setPageCount,setFilters,setSearchValue } = filterSlice.actions

export default filterSlice.reducer