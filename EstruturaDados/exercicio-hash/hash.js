/**
 * implementem hash usando outra funcao hash da criatividade de vcs
 */

 let arrayHash = new Array();
 let words = ['luiza ', 'luna ', 'bia ', 'luana '];
 let listaMaiuscula = words.map(primeiraMaiuscula);
 
 
 //console.log("Criando o hash");
 
 // funcao de espalhamento para array
 function hash(word){
       hashmap = word.length;
 
       // colisao
       while(arrayHash[hashmap] !== undefined){
             hashmap++;
       }
 
       //console.log("hashmap:"+hashmap)
       return hashmap; 
 }
 
 
 words.forEach(function(value, index, list){
       let index_hash = hash(value);
       arrayHash[index_hash] = value;
 })
 
 //console.log("Encontrando elemento atraves do hash \n\n");
 
 
 // funcao de busca de um index
 function findHash(word){
       hashmap = word.length;
 
       //colisao
       while(arrayHash[hashmap] !== word){
             hashmap++;
       }
       console.log(`hashmap encontrado: ${word} -> ${hashmap}`);
       return hashmap;
 }

 
 // função que transforma a primeira letra das palavras(valores do hash) para maiúscula
 function primeiraMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase()+elemento.slice(1);
    
}
 
//  words.forEach(function(value, index){
//        index = findHash(value);
//        console.log(arrayHash[index]);
//  })

 console.log ('Nomes originais: '+words);
 console.log ('Nomes com letra maiúscula : '+ listaMaiuscula);