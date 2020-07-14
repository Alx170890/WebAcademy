class Modal {
    constructor(name, sername, ege) {
      this.name = name;
      this.sername = sername;
      this.age = ege;
    }
  
    printName() {
      return this.name;
    }
    printSername() {
      return this.sername;
    }
    printAge() {
      return this.age;
    }
  }

document.querySelector("button").addEventListener("click", () => {

    let names = document.querySelector("#name").value;
    let sernames = document.querySelector("#sername").value;
    let eges = document.querySelector("#age").value;

    let user = new Modal(names, sernames, eges);

    if(names) {        
        let modalData1 = document.querySelector(".modal1");
        modalData1.innerHTML = `
            <div class="name">${user.printName()}</div>            
        `
        document.querySelector(".modal1").hidden = false;
    } 

    if(sernames) {        
        let modalData2 = document.querySelector(".modal2");
        modalData2.innerHTML = `            
            <div class="sername">${user.printSername()}</div>            
        `
        document.querySelector(".modal2").hidden = false;
    }

    if(eges) {        
        let modalData3 = document.querySelector(".modal3");
        modalData3.innerHTML = `            
            <div class="age">${user.printAge()}</div>
        `
        document.querySelector(".modal3").hidden = false;
    }
})


  
  