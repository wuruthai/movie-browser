import React, { useState } from "react"
import List from "../components/List";
import Search from "../components/Search"
import matchingSearch from '../utils/match-search'

export default function Content({ data, showSearch = false }) {
  const [filteredData, setFilteredData] = useState(data)
  const getFilteredData = (searchText = '') => data.filter(item => matchingSearch(searchText, item.title))

  const withSearch = showSearch ? <Search onChangeSearch={ (e) => setFilteredData(getFilteredData(e.target.value)) } /> : null

  return(
    <section name="content" aria-label="content">
      { withSearch }
      
      <List items={ filteredData } />
    </section>
  );
}