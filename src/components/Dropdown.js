import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default ({ dropdownData, onChangeDropdown, selectedOption = { id: null } }) => {
  return (
    <DropdownButton
    alignRight
    title={!selectedOption.id ? 'Sırala' : selectedOption.name}
    variant="secondary"
    >
      {
        dropdownData.map((option, index) => {
          return (
            <Dropdown.Item onSelect={ onChangeDropdown } active={ selectedOption.id === option.id } key={ option.id } eventKey={ index }>{ option.name }</Dropdown.Item>
          )
        })
      }
    </DropdownButton>
  )
}