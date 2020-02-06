import React, { useState } from "react"
import List from "../components/List";
import Filters from "../layout/Filters"
import matchingSearch from '../utils/match-search'
import dropdownData from '../constants/dropdown-data'

export default function Content({ data, showFilters = false }) {
  const [searchText, setSearchText] = useState('')
  const [selectedOption, setSelectedOption] = useState()
  const sortData = (data) => data.sort((a, b) => {
    if (!selectedOption) return false
    return a[selectedOption.sortBy] > b[selectedOption.sortBy] ? 1 : -1
  })
  const getFilteredData = (text = searchText) => {
    if (text.length < 3) return data.length >= 18 ? data.slice(0, 18) : data
    return data.filter(item => matchingSearch(text, item.title))

}


  const filters = <Filters
    onChangeSearch={ (e) => setSearchText(e.target.value) }
    dropdownData={ dropdownData }
    onChangeDropdown={ (optionIndex) => setSelectedOption(dropdownData[optionIndex]) }
    selectedOption={ selectedOption }
    />

  return(
    <section name="content" aria-label="content" className="content">
      { showFilters ? filters : null }
      
      <List items={ sortData(getFilteredData()) } />
    </section>
  );
}