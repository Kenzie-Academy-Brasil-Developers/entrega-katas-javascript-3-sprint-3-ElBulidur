const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function kata1() {
    // implemente o código do kata 1 aqui
  let result = [];
  for(let i = 1; i <= 25; i++){
    result.push(i);
  }
  
  showResults([result.join(" "), "kata1"]);
  return ""
}
document.write(kata1())


function showResults(results){
  let spanResults = document.createElement("span");
  let result = document.createTextNode(results[0]);
  spanResults.appendChild(result)
  let resposta = document.querySelector("p#"+results[1])
  
  resposta.after(spanResults)
}

function kata2() {
    // implemente o código do kata 2 aqui
  let result = [];
  for(let i = 25; i >= 1; i--){
    result.push(i);
  }
  
  let kata2 = [result.join(" "), "kata2"];
  showResults(kata2);
  return ""
}
document.write(kata2())

function kata3() {
    // implemente o código do kata 3 aqui
  let result = [];

  for(let i = -1; i >= -25; i--){
    result.push(i);
  }
  let kata3 = [result.join(" "), "kata3"];
  showResults(kata3);
  return ""
  
}

document.write(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
  let result = [];

  for(let i = -25; i <= -1; i++){
    result.push(i);
  }
  let kata4 = [result.join(" "), "kata4"];
  showResults(kata4);
  return ""
}

document.write(kata4())


function kata5() {
    // implemente o código do kata 5 aqui
  let result = [];

  for(let i = 25; i >= -25; i--){
    if(i%2 == 1){
      result.push(i);
    }
    if(i%2 == -1){
      result.push(i);
      }
  }
  let kata5 = [result.join(" "), "kata5"];
  showResults(kata5);
  return ""
}

document.write(kata5())

function kata6() {
    // implemente o código do kata 6 aqui
  let result = [];

  for(let i = 3; i <= 100; i++){
    if(i%3 == 0){
      result.push(i);
    }
  }
  let kata6 = [result.join(" "), "kata6"];
  showResults(kata6);
  return ""
}

document.write(kata6())

function kata7() {
    // implemente o código do kata 7 aqui
  let result = [];

  for(let i = 7; i <= 100; i++){
    if(i%7 == 0){
      result.push(i);
    }
  }
  let kata7 = [result.join(" "), "kata7"];
  showResults(kata7);
  return ""
}

document.write(kata7())

function kata8() {
    // implemente o código do kata 8 aqui
  let result = [];

  for(let i = 100; i >= 0; i--){
    if(i%3 == 0 && i%7 == 0){
      result.push(i);
    }
  }
  let kata8 = [result.join(" "), "kata8"];
  showResults(kata8);
  return ""
}

document.write(kata8())

function kata9() {
    // implemente o código do kata 9 aqui
  let result = [];

  for(let i = 5; i <= 100; i++){
    if(i%2 == 1 && i%5 == 0){
      result.push(i);
    }
  }
  let kata9 = [result.join(" "), "kata9"];
  showResults(kata9);
  return ""
}

document.write(kata9())

function kata10(array) {
    // implemente o código do kata 10 aqui
  let kata10 = [array.join(" "), "kata10"];
  showResults(kata10);
  return ""
}

document.write(kata10(sampleArray))

function kata11(array) {
    // implemente o código do kata 11 aqui
  let result = []

  for(let i = 0; i < array.length;i++){
    if(array[i]%2 == 0){
      result.push(array[i])
    }
  }
  let kata11 = [result.join(" "), "kata11"];
  showResults(kata11);
  return ""
}

document.write(kata11(sampleArray))

function kata12(array) {
    // implemente o código do kata 12 aqui
  let result = []

  for(let i = 0; i < array.length;i++){
    if(array[i]%2 == 1){
      result.push(array[i])
    }
  }
  let kata12 = [result.join(" "), "kata12"];
  showResults(kata12);
  return ""
}

document.write(kata12(sampleArray))

function kata13(array) {
    // implemente o código do kata 13 aqui
  let result = []

  for(let i = 0; i < array.length;i++){
    if(array[i]%8 == 0){
      result.push(array[i])
    }
  }
  let kata13 = [result.join(" "), "kata13"];
  showResults(kata13);
  return ""
}

document.write(kata13(sampleArray))

function kata14(array) {
    // implemente o código do kata 14 aqui
  let result = []

  for(let i = 0; i < array.length;i++){
      result.push(array[i]*array[i])
  }
  let kata14 = [result.join(" "), "kata14"];
  showResults(kata14);
  return ""
}

document.write(kata14(sampleArray))

function kata15() {
    // implemente o código do kata 15 aqui
  let result = 0

  for(let i = 1; i <= 20;i++){
      result += i
  }
  let kata15 = [result, "kata15"];
  showResults(kata15);
  return ""
}

document.write(kata15())

function kata16(array) {
    // implemente o código do kata 16 aqui
  let result = 0

  for(let i = 0; i < array.length;i++){
      result += array[i]
  }
  let kata16 = [result, "kata16"];
  showResults(kata16);
  return ""
}

document.write(kata16(sampleArray))

function kata17(array) {
    // implemente o código do kata 17 aqui
  let result = array[0]

  for(let i = 1; i < array.length;i++){
    if(result > array[i]){
      result = array[i]
    }
  }
  let kata17 = [result, "kata17"];
  showResults(kata17);
  return ""
}

document.write(kata17(sampleArray))

function kata18(array) {
    // implemente o código do kata 18 aqui
  let result = array[0]

  for(let i = 1; i < array.length;i++){
    if(result < array[i]){
      result = array[i]
    }
  }
  let kata18 = [result, "kata18"];
  showResults(kata18);
  return ""
}

document.write(kata18(sampleArray))

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    let divBonus = document.createElement("div");
    divBonus.setAttribute("class", "kataBonus");
    let pBonus = document.createElement("p");
    pBonus.setAttribute("class", "pBonus");
    pBonus.innerText = "BONUS 1 - Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.";
    divBonus.appendChild(pBonus);

    for(let i =1;i<=20;i++){
      let box = document.createElement("div");
      box.style.width = "100px"
      box.style.height = "20px"
      box.style.display = "inline-block"
      box.style.margin = "5px"
      box.style.background = "grey"
      divBonus.appendChild(box)
    }

    let divExtra = document.querySelector("div.extras")
    divExtra.appendChild(divBonus)
    return ""
}
document.write(kataBonus1())

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let divBonus = document.createElement("div");
    divBonus.setAttribute("class", "kataBonus");
    let pBonus = document.createElement("p");
    pBonus.setAttribute("class", "pBonus");
    pBonus.innerText = "BONUS 2 - Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.";
    divBonus.appendChild(pBonus)
    for(let i =105;i<=200;i++){
      let box = document.createElement("div");
      box.style.width = i+"px"
      box.style.height = "20px"
      box.style.display = "inline-block"
      box.style.margin = "5px"
      box.style.background = "gray"
      divBonus.appendChild(box)
      i += 4;
    }
    let divExtra = document.querySelector("div.extras")
    divExtra.appendChild(divBonus)
    return ""
}
document.write(kataBonus2())

function kataBonus3(array) {
    // implemente o código do kata bonus 3 aqui

    let divBonus = document.createElement("div");
    divBonus.setAttribute("class", "kataBonus");
    let pBonus = document.createElement("p");
    pBonus.setAttribute("class", "pBonus");
    pBonus.innerText = "BONUS 3 - Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray.";
    divBonus.appendChild(pBonus)
    for(let i =1;i<=array.length;i++){
      let box = document.createElement("div");
      box.style.width = array[i]+"px"
      box.style.height = "20px"
      box.style.display = "inline-block"
      box.style.margin = "5px"
      box.style.background = "gray"
      divBonus.appendChild(box)
    }
    let divExtra = document.querySelector("div.extras")
    divExtra.appendChild(divBonus)
    return ""
}
document.write(kataBonus3(sampleArray))

function kataBonus4(array) {
    // implemente o código do kata bonus 4 aqui
    let divBonus = document.createElement("div");
    divBonus.setAttribute("class", "kataBonus");
    let pBonus = document.createElement("p");
    pBonus.setAttribute("class", "pBonus");
    pBonus.innerText = "BONUS 4 - Como no Item #3, mas alternando cores para que retângulo sim, retângulo não seja vermelho.";
    divBonus.appendChild(pBonus)
    for(let i =1;i<=array.length;i++){
      let box = document.createElement("div");
      box.style.width = array[i]+"px"
      box.style.height = "20px"
      box.style.display = "inline-block"
      box.style.margin = "5px"
      if(i%2 == 1){
      box.style.background = "red"
      }else{
      box.style.background = "gray"
      }
      divBonus.appendChild(box)
    }
    let divExtra = document.querySelector("div.extras")
    divExtra.appendChild(divBonus)
    return ""
}
document.write(kataBonus4(sampleArray))

function kataBonus5(array) {
    // implemente o código do kata bonus 5 aqui
    let divBonus = document.createElement("div");
    divBonus.setAttribute("class", "kataBonus");
    let pBonus = document.createElement("p");
    pBonus.setAttribute("class", "pBonus");
    pBonus.innerText = "BONUS 5 - Como no Item #3, mas pinte os retângulos de largura par de vermelho.";
    divBonus.appendChild(pBonus)
    for(let i =1;i<=array.length;i++){
      let box = document.createElement("div");
      box.style.width = array[i]+"px"
      box.style.height = "20px"
      box.style.display = "inline-block"
      box.style.margin = "5px"
      if(i%2 == 0){
      box.style.background = "red"
      }else{
      box.style.background = "gray"
      }
      divBonus.appendChild(box)
    }
    let divExtra = document.querySelector("div.extras")
    divExtra.appendChild(divBonus)
    return ""
}
document.write(kataBonus5(sampleArray))