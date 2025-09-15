

    async function fetchPokemon(id){

        //Fetch 5 Pokemon -- use 5 Id's with url.

        const url = `${this.url}${id}`;

        const response = await fetch(url);

        console.log("REQUEST URL : ", url);


        if(!response.ok){
            console.log("ERROR cant fetch data");
        }
        


        const data = await response.json();

        await this.pokemonData.push(data);

        console.log(data.name);
        console.log(data.id);
        
          return {
            
            name: data.name,

            sprite : data.sprites.front_default

          }

      

    }

    export {fetchPokemon};
