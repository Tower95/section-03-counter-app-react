import '@testing-library/jest-dom';
import { getSaludo } from "../../base/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

  test('getSaludoo debe de retornar Hola Ismael', () => {

    const nombre = 'Ismael';

    const result = getSaludo(nombre);

    console.log(result);

    expect(result).toBe('Hola ' + nombre);

  });

  test('getSaludo debe de retornar Hola Carlos si no hay argumento ', () => {

    const result = getSaludo();

    expect(result).toBe("Hola Carlos");

  });


});