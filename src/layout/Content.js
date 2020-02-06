import React, { useState } from "react"
import List from "../components/List";
import Filters from "../layout/Filters"
import matchingSearch from '../utils/match-search'
import dropdownData from '../constants/dropdown-data'

export default function Content({ data, showFilters = false }) {
  const [searchText, setSearchText] = useState('')
  const [selectedOption, setSelectedOption] = useState()
  
  const getFilteredData = (text = searchText) => data.filter(item => matchingSearch(text, item.title))
  .sort((a, b) => {
    if (!selectedOption) return false
    return a[selectedOption.sortBy] > b[selectedOption.sortBy] ? 1 : -1
  })


  const filters = <Filters
    onChangeSearch={ (e) => setSearchText(e.target.value) }
    dropdownData={ dropdownData }
    onChangeDropdown={ (optionIndex) => setSelectedOption(dropdownData[optionIndex]) }
    selectedOption={ selectedOption }
    />

  return(
    <section name="content" aria-label="content">
      { showFilters ? filters : null }
      
      <List items={ getFilteredData() } />
    </section>
  );
}