import React from 'react'
import { FormControl } from "react-bootstrap";

export default function Search({ onChangeSearch }) {
  return(
  <FormControl
    onChange={ onChangeSearch }
    placeholder="Search Movie / Series"
    aria-label="Search Movie / Series"
  />
  )
}