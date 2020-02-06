import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/utils.css'

export default function ListItem(item) {
  return (
    <Card className="col-md-6 col-custom border-0">
      {/* TODO :: We need configure lazy load */}
      <Card.Img variant="top" src={ item.url } loading="lazy" />
      <Card.Body>
        <Card.Title className="text-center">{ item.title }</Card.Title>
      </Card.Body>
    </Card>
  )
}