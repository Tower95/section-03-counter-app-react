import { getHeroeById, getHeroesByOwner } from "../../base/base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba en funciones de heroes', () => {

  test('getHeroeById debe de retornar un héroe por id ', () => {

    const id = 1;

    const result = getHeroeById(id);

    const heroeTest = heroes.find((h => h.id === id));

    expect(result).toEqual(heroeTest);

  });

  test('getHeroeById debe de retornar undefine si héroe no existe ', () => {

    const id = 10;

    const result = getHeroeById(id);

    expect(result).toEqual(undefined);

  });

  test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

    const owner = 'DC';

    const result = getHeroesByOwner(owner);

    expect(result.length).toEqual(3)

    expect(result).toEqual( heroes.filter(h => h.owner===owner))

  });

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {


    const owner = 'Marvel';

    const result = getHeroesByOwner(owner);

    expect(result.length).toEqual(2);

    expect(result).toEqual(heroes.filter(h => h.owner===owner));

  });

  

});
