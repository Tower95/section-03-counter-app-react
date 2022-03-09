import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/base-pruebas/05-funciones";

describe('Pruebas 05-funciones', () => {

  test('debe de retornar un objeto', () => {

    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const result = getUser();

    expect(result).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un objeto ', () => {

    const nombre = 'Ismael Torres'

    const userActive = {
      uid: 'ABC567',
      username: nombre
    }

    const result = getUsuarioActivo(nombre);

    expect(result).toEqual(userActive);

  });

});
