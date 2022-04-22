let exemploDois = new Array("José", "Maria", "João");

exemploDois.push("Jéssica");
console.log(exemploDois);

exemploDois = new Array("José", "Maria", "João");

exemploDois.unshift("Jéssica", "Vitor");
console.log("");
console.log(exemploDois);

exemploDois = new Array("José", "Maria", "João");

exemploDois.splice(2, 0, "Ivete");
console.log("");
console.log(exemploDois);
