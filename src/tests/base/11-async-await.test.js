import { getImagen } from "../../base/base-pruebas/11-async-await";

describe('Prueba async await', () => {
  
  test('debe de retornar ek url de la imagen ', async() => {
    
    const result = await getImagen();

    expect( result.includes('https://')).toBe(true);

  });
  

});
