import arr from "../utils/Arr";

function SortCards(){

    for(let i = 0 ; i < arr.length -1 ; i++ ){

        for( let j= i+1 ; j < arr.length ; j++){

            if( Number(arr[i].price) > Number( arr[j].price) ){
                
                [arr[i] , arr[j]] = [arr[j] , arr[i]] ;
            }
        }
    }

        
} 


export default SortCards ;