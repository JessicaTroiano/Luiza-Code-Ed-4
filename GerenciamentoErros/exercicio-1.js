function checkError(){

    const conditionError = true;
    try{
        if (conditionError){
            throw new Error ('Condição Erro!')
        }
    }
    catch (error){
            console.log('Erro: ', error)
    }

}
checkError();
console.log(checkError);