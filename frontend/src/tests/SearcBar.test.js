import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../components/SearchBar'

it('renders without crashing', () => {
    shallow(<SearchBar/>)
})
