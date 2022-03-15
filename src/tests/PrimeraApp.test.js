import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'

describe('Pruebas en <PriemaraApp />', () => {
  
  // test('demostrar el mensaje "Hola, soy Goku"', () => {

  //   const saludo = 'Hola, soy Goku';

  //   const {getByText} = render(<PrimeraApp saludo={saludo}/>);

  //   expect(getByText(saludo)).toBeInTheDocument();
    
  // });

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    
    const saludo = 'Hola, Soy Goku';

    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

    expect( wrapper ).toMatchSnapshot();

  });

  test('debe de mostrar el subtitutlo enviado por props ', () => {
    
    const saludo = 'Hola, Soy Goku';

    const suntitulo = 'soy un subtitle';

    const wrapper = shallow(
      <PrimeraApp 
        saludo={saludo}
        subtitulo={suntitulo}
        />
    );
    const textParrafo = wrapper.find('p').text();

    expect(textParrafo).toBe(suntitulo);
  });
  
  

});
