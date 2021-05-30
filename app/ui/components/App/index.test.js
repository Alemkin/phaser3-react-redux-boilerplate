import React from 'react'
import { shallow } from 'enzyme'
import App from './index'
import { cleanup } from 'react-testing-library'
import '../../../test.config'

afterEach(cleanup)

describe('App component', () => {
  it('renders', () => {
    const wrapper = shallow(<App user={{ id: 1 }} />)

    expect(wrapper.exists()).toBeTruthy()
  })
})
