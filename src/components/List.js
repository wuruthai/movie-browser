import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Item from './Item'
import data from '../constants/data'
export default function List() {
  const items = JSON.parse(JSON.stringify(data.entries))

  return (
    <Container className="mt-4 mb-4">
      <Row>
        { items.map((item, index) => <Item { ...{ ...item, url: item.images['Poster Art'].url } } key={ index } />) }
      </Row>
    </Container>
  )
}