import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'

export default ({
   dropdownData,
   onChangeSearch,
   onChangeDropdown,
   selectedOption,
}) => {
   return (
      <Container>
         <Row className="mt-4 justify-content-between">
            <div className="col-5">
               <Search onChangeSearch={onChangeSearch} />
            </div>
            <div className="mr-3">
               <Dropdown
                  dropdownData={dropdownData}
                  onChangeDropdown={onChangeDropdown}
                  selectedOption={selectedOption}
               />
            </div>
         </Row>
      </Container>
   )
}
