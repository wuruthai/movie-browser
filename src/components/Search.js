import React from 'react'
import { FormControl } from 'react-bootstrap'

export default function Search({ onChangeSearch }) {
   return (
      <FormControl
         onChange={onChangeSearch}
         placeholder="Movie / Series"
         aria-label="Movie / Series"
      />
   )
}
