import React from 'react'
import Search from "../components/Search"
import Dropdown from "../components/Dropdown"
import { Container, Row, Col } from 'react-bootstrap'

export default ({ dropdownData, onChangeSearch, onChangeDropdown, selectedOption }) => {
  return (
    <Container>
      <Row>
        <Col className="mt-4">
          <Search  onChangeSearch={onChangeSearch} />
        </Col>
        <Col className="mt-4">
          <Dropdown dropdownData={ dropdownData } onChangeDropdown={ onChangeDropdown } selectedOption={ selectedOption } />
        </Col>
      </Row>
    </Container>
  )
}