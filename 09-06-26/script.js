//  //DESAFIO 1//


//   let equipe = ["Pernalonga", "Taz"];


//   if (equipe.length < 3 && !equipe.includes("Patolino")) {
//    equipe.push("Patolino");
//  }

//   equipe.sort();

//   let indicePernalonga = equipe.indexOf("Pernalonga");
//   if (indicePernalonga !== -1) {
//      equipe.splice(indicePernalonga, 1);
//     equipe.unshift("Pernalonga");      
//   }

//  let temF = equipe.some(nome => nome.startsWith("F"));
//   if (!temF) {
//       equipe.push("Frajola");
//  }

//   console.log("Equipe Final:", equipe);


 // DESAFIO: 2// 


// let gangue = ["Pernalonga", "Lola", "Taz"]; 


// if (gangue.length === 0) {
//     gangue.unshift("Taz");
// }


// if (gangue.length > 0 && gangue[gangue.length - 1] !== "Taz") {
//     gangue.pop();
// }


// if (gangue.length > 0 && gangue[0].length < 5) {
//     gangue.shift();
// }


// let existeComA = gangue.some(nome => nome.toLowerCase().endsWith('a'));
// if (existeComA) {
//     gangue.push("Tina");
// }

// let copiaFiltrada = gangue.filter(nome => nome.length >= 5 && nome.length <= 8);


// console.log("Gangue final:", gangue);
// console.log("Cópia filtrada (5 a 8 letras):", copiaFiltrada);

// DESAFIO: 3//

// let listaCaca = ["Lola", "Taz"];

// if (listaCaca[0] !== "Pernalonga") {
//     listaCaca.unshift("Pernalonga");
// }

// if (!listaCaca.some(nome => nome.toLowerCase().includes("ave"))) {
//     listaCaca.unshift("Patolino");
// }

// let indicePatolino = listaCaca.indexOf("Patolino");
// if (indicePatolino > 2) {
//     listaCaca.splice(indicePatolino, 1);
// }

// if (listaCaca.length >= 2) {
//     listaCaca.push("Frajola");
// }

// let listaFiltrada = listaCaca.filter(nome => {
//     let nomeLower = nome.toLowerCase();
//     return nomeLower.startsWith("p") && ["a", "e", "i", "o", "u"].includes(nomeLower.slice(-1));
// });
// console.log("Lista de Caça final:", listaCaca);
// console.log("Personagens filtrados (começam com 'P' e terminam com vogal):", listaFiltrada);

// DESAFIO: 4//

//  let convidados = ["Pernalonga", "Taz"];

//  if (!convidados.includes("Lola") && !convidados.includes("Gaguinho")) {
//      convidados.push("Lola", "Gaguinho");
//  }


//  console.log("Convidados:", convidados.join(" | "));

//  if (convidados[convidados.length - 1] === "Gaguinho") {
//      convidados.pop();
//  }

//  let convidadosComLetrasRepetidas = convidados.filter(nome => {
//      let letrasVistas = new Set(); 
//      for (let letra of nome.toLowerCase()) {
//       if (letrasVistas.has(letra)) {
//             return true; 
//       } else {
//            letrasVistas.add(letra);
//          } 
//      }
//      return false; 
//  });

//  let convidadosComDuasPalavras = convidados.filter(nome => nome.trim().split(/\s+/).length === 2);   

//  console.log("Convidados com letras repetidas:", convidadosComLetrasRepetidas);
//  console.log("Número de convidados com exatamente 2 palavras no nome:", convidadosComDuasPalavras.length);   


// // DESAFIO: 5// 

// let clubeSupersecreto = ["Pernalonga", "Taz"];

// if (!clubeSupersecreto.some(nome => nome.length < 5)) {
//     clubeSupersecreto.push("Piu-Piu");
// }

// if (clubeSupersecreto.some(nome => nome.toLowerCase().includes("ave") || nome.toLowerCase().includes("roedor"))) {
//     clubeSupersecreto.push("Hector");
// }

// let indicePiuPiu = clubeSupersecreto.indexOf("Piu-Piu");
// if (indicePiuPiu !== -1 && indicePiuPiu < clubeSupersecreto.length - 1) {
//     clubeSupersecreto.splice(indicePiuPiu + 1, 0, "Ligeirinho");
// }

// let indiceHector = clubeSupersecreto.indexOf("Hector");
// if (indiceHector !== -1 && clubeSupersecreto[indiceHector].length % 2 === 1) {
//     clubeSupersecreto.splice(indiceHector, 1);
// }

// let membrosComI = clubeSupersecreto.filter(nome => nome.toLowerCase().includes("i"));
// let membrosComIMaiusculo = membrosComI.map(nome => nome.toUpperCase());

// console.log("Clube Supersecreto final:", clubeSupersecreto);
// console.log("Membros com 'i' em maiúsculo:", membrosComIMaiusculo);


// DESAFIO: 6//


// let corridaMaluca = ["Ligeirinho"];

// if (corridaMaluca.length >= 1) {
//     corridaMaluca.push("Papa-Léguas", "Frajola");
// }

// if (corridaMaluca.length > 1) {
//     let primeiro = corridaMaluca[0];
//     let resto = corridaMaluca.slice(1).sort();
//     corridaMaluca = [primeiro, ...resto];
// }

// if (corridaMaluca[0].length > 6) {
//     corridaMaluca.reverse();
// }

// corridaMaluca.sort();

// corridaMaluca = corridaMaluca.slice(0, 2);

// if (corridaMaluca.length > 0 && !["a", "e", "i", "o", "u"].includes(corridaMaluca[corridaMaluca.length - 1][0].toLowerCase())) {
//     corridaMaluca.pop();
// }

// console.log("Corredores final:", corridaMaluca);

// DESAFIO: 7//


// let bandoPapaLeguas = ["Papa-Léguas", "Frajola"];

// if (bandoPapaLeguas.length % 2 === 1) {
//     bandoPapaLeguas.push("Coiote");
// }

// let nomesComVogaisConsecutivas = bandoPapaLeguas.filter(nome => /[aeiouAEIOU]{2}/.test(nome));

// if (bandoPapaLeguas.length < 4) {
//     bandoPapaLeguas = bandoPapaLeguas.concat(["Pernalonga", "Taz"]);
// }

// if (bandoPapaLeguas.some(nome => (nome.match(/L/gi) || []).length >= 2)) {
//     bandoPapaLeguas.push("Patolino");
// }

// let indiceCoiote = bandoPapaLeguas.indexOf("Coiote");
// console.log("Bando do Papa-Léguas final:", bandoPapaLeguas);
// // console.log("Índice do Coiote:", indiceCoiote);


// DESAFIO: 8//

// let circoComplexoGaguinho = ["Taz", "Piu-Piu"];

// if (!circoComplexoGaguinho.some(nome => nome.toLowerCase().includes("o"))) {
//     circoComplexoGaguinho.push("Lola");
// }

// if (circoComplexoGaguinho.length === 2) {
//     circoComplexoGaguinho.unshift("Pernalonga");
// }

// if (circoComplexoGaguinho.every(nome => ["a", "e", "i", "o", "u"].includes(nome.slice(-1).toLowerCase()))) {
//     circoComplexoGaguinho.push("Patolino");
// }

// let nomeArtistas = circoComplexoGaguinho.filter(nome => nome.length % 2 === 0);

// let artistasConsoante6Letras = circoComplexoGaguinho.filter(nome => {
//     let primeiraLetra = nome[0].toLowerCase();
//     return !["a", "e", "i", "o", "u"].includes(primeiraLetra) && nome.length >= 6;
// });

// console.log("Circo Complexo do Gaguinho final:", circoComplexoGaguinho);
// console.log("Nomes dos artistas com número par de letras:", nomeArtistas);
// console.log("Artistas que começam com consoante e têm pelo menos 6 letras:", artistasConsoante6Letras);


// DESAFIO: 9// 


// let ligaAntiBaguncaVovo = ["Pernalonga", "Taz"];

// if (ligaAntiBaguncaVovo.length === 0) {
//     ligaAntiBaguncaVovo.push("Piu-Piu");
// }
// ligaAntiBaguncaVovo.unshift("Frajola");

// if (ligaAntiBaguncaVovo.length > 2) {
//     let indiceFrajola = ligaAntiBaguncaVovo.indexOf("Frajola");
//     if (indiceFrajola !== -1) {
//         ligaAntiBaguncaVovo.splice(indiceFrajola, 1);
//         ligaAntiBaguncaVovo.push("Frajola");
//     }
// }

// let todosComLetraRepetida = ligaAntiBaguncaVovo.every(nome => {
//     let letrasVistas = new Set();
//     for (let letra of nome.toLowerCase()) {
//         if (letrasVistas.has(letra)) {
//             return true;
//         } else {
//             letrasVistas.add(letra);
//         }
//     }
//     return false;
// });

// let personagensFiltrados = ligaAntiBaguncaVovo.filter(nome => {
//     let nomeLower = nome.toLowerCase();
//     return !nomeLower.includes("gato") && !nomeLower.includes("ave");
// });

// console.log("Liga Anti-Bagunça da Vovó final:", ligaAntiBaguncaVovo);
// console.log("Todos os membros possuem letra repetida?", todosComLetraRepetida);
// console.log("Personagens que não são gatos nem aves:", personagensFiltrados);





