import request from "superagent"


export function getPokemon(id) {
    return request.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            const pokemon = new Pokemon(data)
        })
}





// class Pokemon {
//     constructor(data) {
//       this.id = data.id;
//       this.name = data.name;
//       this.sprite = data.sprites.front_default;
//       this.type = data.types[0].type.name;    
//     }
//   }
  
//   export default Pokemon;