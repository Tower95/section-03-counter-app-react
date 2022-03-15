import CounterApp from '../../src/CounterApp';
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

  let wrapper =shallow(<CounterApp />);

  beforeEach(() => {

    let wrapper = shallow(<CounterApp />);
  })

  test('debe de mostrar <CounterApp /> correctamente', () => {

    const textValueDefault = "10";

    wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();

    const textValue = wrapper.find('h2').text();

    expect(textValue).toBe(textValueDefault);

  });

  test('debe de mostrar <CounterApp /> default value = 10', () => {

    const valueText = 100

    const wrapper = shallow(<CounterApp value={valueText} />);

    const text = wrapper.find('h2').text()

    expect(text).toBe(`${valueText}`);

  });

  test('debe de incrementar con el boton +1', () => {

    let wrapper = shallow(<CounterApp />);

    wrapper.find('button').at(0).simulate('click');

    const Countertext = wrapper.find('h2').text();

    expect(Countertext).toBe("11");

  });

  test('debe de incrementar con el boton -1', () => {

    wrapper.find('button').at(2).simulate('click');

    const Countertext = wrapper.find('h2').text();

    expect(Countertext).toBe("9");

  });

   test('debe de incrementar con el boton reset', () => {

    wrapper.find('button').at(2).simulate('click');

    wrapper.find('button').at(1).simulate('click');

    const Countertext = wrapper.find('h2').text();

    expect(Countertext).toBe("10");

   });



});
