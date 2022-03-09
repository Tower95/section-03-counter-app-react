import { getHeroeByIdAsync } from "../../base/base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

  test('debe retornar un heroe async', (done) => {

    const id = 1;

    getHeroeByIdAsync(id).then((hero)=>{
      
      expect(hero).toBe(heroes.find(h => h.id = id));

      done();
    
    });

  });

  test('debe retornar un error cuando no encuentre al heroe', (done) => {
    
    const id = 10;

    getHeroeByIdAsync(id)
    .catch(e => {
      expect(e).toBe( 'No se pudo encontrar el héroe');
      done();
    });

  });
  
  
  
});