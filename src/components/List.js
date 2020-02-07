import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ListItem from './List-item'

export default function List({ items = [] }) {
   return (
      <Container className="mt-4 mb-4">
         <Row>
            {items.map((item, index) => (
               <ListItem
                  {...{ ...item, url: item.images['Poster Art'].url }}
                  key={index}
               />
            ))}
         </Row>
      </Container>
   )
}
