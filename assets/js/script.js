class Item {
  #restante = document.querySelector('.restante').innerHTML = 0;
  #valor = "";

  criarCard(){
    let menu = document.querySelector('#menu');
    if(this.#valor != 0){
      let itemSalvos = document.querySelectorAll('#item');

      menu.innerHTML += `
      <li id="item">
        <p>
          <span class="mark">
            <input id="" type="radio"/>
          </span>
          ${this.#valor}
        </p> 
        <button class="fa-solid fa-xmark close"></button>
      </li>
      `;
      this.contador(itemSalvos.length+1, true);
    }
  }

  excluir(){
    let cards = document.querySelectorAll('li');
    let buttons = document.querySelectorAll(".close");
    buttons.forEach((button,pos)=>{
      button.addEventListener('click',()=>{
        let itemSalvos = document.querySelectorAll('#item');

        this.contador(itemSalvos.length-1, false);
        cards[pos].remove();
        console.log(pos);
      })
    })
  }
  contador(valor, condicao){
    let restante = document.querySelector('.restante');
    console.log(Number(restante.innerHTML));
    if(condicao){
      restante.innerHTML = valor;
    }else{
      restante.innerHTML = valor;
    }
    console.log(valor);
    
  }

  get getValor() { return this.valor; }
  set setValor(valor) {this.#valor = valor;}
}
  const item = new Item();
  
  const form = document.querySelector('#myForm');//form de formulario

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputValue = document.querySelector('#text').value;

    item.setValor = inputValue;
    item.criarCard();
    item.excluir();
  })

  


  
  
 