import { URL } from "../config";


     function getList(IDs){

        console.log(IDs);

       
        return Promise.all(

            IDs.map(async (ID) => {

                const result = await fetch(URL + ID);

                return await result.json();

                

             })

        )
       

     


   

    }

    export {getList};
