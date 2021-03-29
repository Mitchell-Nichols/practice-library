
let strPrint = ``;
  //for (let i = 0; i <= quotes.length; i++){

    let numR = Math.floor(Math.random() * quotes.length);
    let selected = quotes[numR];

    strPrint += `
      <h1>${selected.quote}</h1>
      <h3>${selected.author}</h3>
    `;
//  };

document.querySelector('main').innerHTML = strPrint;
//console.log(strPrint);
