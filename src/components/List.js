import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Item from './Item'

export default function List({items = []}) {

  return (
    <Container className="mt-4 mb-4">
      <Row>
        { items.map((item, index) => <Item { ...{ ...item, url: item.images['Poster Art'].url } } key={ index } />) }
      </Row>
    </Container>
  )
}