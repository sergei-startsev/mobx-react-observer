import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import FooWrapped, { Foo } from './Foo.jsx';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Foo', () => {
  test('shallow', () => {
    const component = shallow(<Foo />);
    expect(component).toMatchSnapshot();
  });
})

describe('Foo Wrapped', () => {
  test('shallow', () => {
    const component = shallow(<FooWrapped store={{}}/>);
    expect(component).toMatchSnapshot();
  });
})