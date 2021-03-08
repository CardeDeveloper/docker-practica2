const router = require('express').Router()

router.route('/').get((req, res) => {
    msg = `Hello ${req.query.name || "World"} from get request!`;
    res.json({ msg });
  })

  router.route('/:op').post((req, res) => {
    switch (req.params.op) {
      case "suma":
        //query param de suma de los elementos del arreglo
        arr =  req.body.nums;
        result = 0;
        arr.forEach(element => {
            result += element
        });
        break;
      case "resta":
        arr =  req.body.nums;
        result = 0;
        //query param de resta, suma los elementos del arreglo
        arr.forEach(element => {
            result += element
        });

        //finalmente resta el resultado menos el valor de la segunda etiqueta del body
        result -= req.body.numToSubs;
        break;
      case "multiplica":
        arr =  req.body.nums;
        result = 1;
        //multiplica todos los elementos del arreglo del body
        arr.forEach(element => {
            result *= element
        });
        break;
      case "divide":
        //divide el elemento de la etiqueta numToDiv entre cada elemento del arreglo
        arr =  req.body.nums;
        result = req.body.numToDiv;
        arr.forEach(element => {
            result /= element
        });
        break;
      case "free":
        //recibe una funcion y la debe de evaluar usando jerarquias
        arrOperation = req.body.operation.split(" ");
        result = 0;
        
        let i = 1;
        //primero revisa y hace las operaciones de mayor jerarquia (*,/)
        while(arrOperation.length > i){
            if(arrOperation[i] == "*"){
                //realiza la operacion
                result = arrOperation[i-1] * arrOperation[i+1];
                //y elimina del arreglo los numeros multiplicados junto con el operador, y deja en su lugar el resultado de la operacioin
                arrOperation.splice(i-1,3,result);
            }else if (arrOperation[i] == "/") {
                result = arrOperation[i-1] / arrOperation[i+1];
                arrOperation.splice(i-1,3,result);
            }else{
                i += 2;
            }          
        }
        //reinicializa el contador
        i = 1;
        //aplica la misma logica pero ahora con los operadores de menor jerarquia
        while(arrOperation.length > i){
            if(arrOperation[i] == "+"){
                result = Number(arrOperation[i-1]) + Number(arrOperation[i+1]);
                arrOperation.splice(i-1,3,result);
            }else if (arrOperation[i] == "-") {
                result = arrOperation[i-1] - arrOperation[i+1];
                arrOperation.splice(i-1,3,result);
            }else{
                i += 2;
            }          
        }
        break;
      default:
        
    }
    res.send({"resultado": result});
  })


  module.exports = router 
