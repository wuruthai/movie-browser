import React, { useState } from 'react'
import List from '../components/List'
import Filters from './Filters'
import matchingSearch from '../utils/match-search'
import dropdownData from '../constants/dropdown-data'

export default function Content({ data, showFilters = false }) {
   // Hooks for search and selected dropdown
   const [searchText, setSearchText] = useState('')
   const [selectedOption, setSelectedOption] = useState()

   // wrapper function for sort data
   const sortData = data =>
      data.sort((a, b) => {
         if (!selectedOption) return false
         return a[selectedOption.sortBy] > b[selectedOption.sortBy] ? 1 : -1
      })

   // search in data
   const getFilteredData = (text = searchText) => {
      if (text.length < 3) return data.length >= 18 ? data.slice(0, 18) : data
      return data.filter(item => matchingSearch(text, item.title))
   }

   // toolbar filters (search and sorting dropdown)
   const filters = (
      <Filters
         onChangeSearch={e => setSearchText(e.target.value)}
         dropdownData={dropdownData}
         onChangeDropdown={optionIndex =>
            setSelectedOption(dropdownData[optionIndex])
         }
         selectedOption={selectedOption}
      />
   )

   return (
      <section name="content" aria-label="content" className="content">
         {showFilters ? filters : null}

         <List items={sortData(getFilteredData())} />
      </section>
   )
}
