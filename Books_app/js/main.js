// localStorage.clear();
if (!(localStorage.getItem("start"))) {
    document.location.href = "html/onboarding.html";
  };
//------Выводим время каждую минуту------
const timeNow = (tegClassInner) => {
    const time = document.querySelector(`.${tegClassInner}`);
    const timeNow = new Date().toLocaleTimeString().slice(0,-3);
    time.innerHTML = `${timeNow}`;
    setInterval(() => {
        const timeNow = new Date().toLocaleTimeString().slice(0,-3);
        time.innerHTML = `${timeNow}`;
    }, 60000);
};
timeNow("time");
  //------Слайдер книг------
const slider = () => {               
    $(".vertical").slick({		        
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      verticalSwiping: true,		        
      infinite: false,		        
      draggable: true,
      arrows: false          
    });
};
const url = 'http://localhost:3000/books';
//------Получаем список моих книг с сервера------
const getData = () => fetch(url)
    .then((result)=> result.json())
    .then((res) => {             
        return res;                
});
//------Добавляем нужный HTML код для дальнейшей работы------
const addTegsToStart = async() => {
    const res = await getData();
    if(res.length !== 0) {
    document.querySelector(".booksColection").innerHTML = `    
    <div class="search">				
        <img src="img/book.png" alt="serch">				
        <input type="serch" placeholder="What’s the book’s name?">
        <div class="search__book">
		</div>				
    </div>
    <h2>My books</h2>
    <div class="books">			
        <div class="vertical slider">
        </div>
    </div>
    `         
    renderBookPromo();           
    }     
};
addTegsToStart();
//------По нажатию на кнопку переходим на страницу покупки книг------
document.querySelector(".addBook__btn").addEventListener("click", () => {
    document.location.href = "html/addBook.html";
})
// ------Функция для перезаписи кнопки возврата на пред. страницу------
const backPage = (func) => {
    document.querySelector(".back").addEventListener("click", func);
};
//------Поиск по списку книг------
const searchBook = async() => {  
    const res = await getData();       
    const bookInput = document.querySelector("input").value.toLowerCase();     
    res.forEach((item) => {             
        const searchValue = item.volumeInfo.title.toLowerCase().split(" ");       
        if(searchValue.includes(bookInput)) {            
            document.querySelector(".search__book").innerHTML += `
            <div class="search__find">
                ${item.volumeInfo.title}
            </div>
            `
        };
    });
    addEvLisBook(".search__find", res);    
};
//------Слушаем что происходит после изменения значения в поиске------
const findBook = () => {
    document.querySelector("input").addEventListener("change", searchBook);    
};
// ------Возврат на страницу выбора книг------
const backBookColection = () => {    
    document.querySelector(".booksColection").innerHTML = `
    <div class="search">				
        <img src="img/book.png" alt="serch">				
        <input type="serch" placeholder="What’s the book’s name?">
        <div class="search__book">
		</div>				
    </div>
    <h2>My books</h2>
    <div class="books">			
        <div class="vertical slider">
        </div>
    </div>
    `
    renderBookPromo();
    document.querySelector(".back").innerHTML = ``    
};
//------Возврат на страницу описания книги------
const backBookDesc = () => {    
    document.querySelector(".readBg").hidden = true;
    document.querySelector(".wrapper").hidden = false;
    backPage(backBookColection);    
};
//------Переход на предпросмотр текста книги------
const textDescription = () => {
    document.querySelector(".fullSynopsis").addEventListener("click", () => {         
        document.querySelector(".readBg").hidden = false;
        document.querySelector(".wrapper").hidden = true;        
        document.querySelector(".closeRead").addEventListener('click', backBookDesc);          
    });
};
//------Добавление краткого описания выбранной книги------
const addEvLisBook = (teg, res) => {       
    document.querySelectorAll(teg).forEach((item) => {           
        item.addEventListener("click", () => {  
            document.querySelector(".back").innerHTML = `
                <span class="fas fa-arrow-left"></span>
            `          
            res.forEach((items) => {                 
                if(items.volumeInfo.title == item.innerHTML.trim()) {
                    document.querySelector(".readBook").innerHTML =  `${items.volumeInfo.description}`                    
                    document.querySelector(".booksColection").innerHTML = `
                    <div class="bookMain">
                        <div class="bookMain_mainImage">                   
                            <img src="${items.volumeInfo.imageLinks.thumbnail}" alt="">
                        </div>
                        <div class="bookMain_text">
                            <div class="bookMain_heading">
                                <h3>
                                    ${items.volumeInfo.title}
                                </h3>
                            </div>	
                            <div class="bookMain_author">
                                <p>
                                    ${items.volumeInfo.authors}							
                                </p>
                            </div>           
                        </div>
                    </div>
                    <div class="Main_text">
                        <div class="Main_text_text">				
                            <p>
                                ${items.volumeInfo.description}
                            </p>            
                        </div>	
                        <div class="fullSynopsis">
                            Read book
                        </div>
                    </div>
                    `                        
                    backPage(backBookColection);                      
                    textDescription();                                       
                };
            });
        });       
    });    
};
//------Добавление всех книг на страницу------
async function renderBookPromo() {
    const res = await getData();    
    document.querySelector(".vertical").innerHTML = res.reduce((acc, item) => `${acc}    
        <div class="bookWrapper">
            <div class="book ${item.id}">
                <div class="mainImage">
                    <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
                </div>
                <div class="text">
                    <div class="heading">
                        <h3>
                            ${item.volumeInfo.title}
                        </h3>
                    </div>	
                    <div class="author">
                        <p>
                            ${item.volumeInfo.authors}
                        </p>
                        <span hidden>${item.volumeInfo.description}</span>
                    </div>								
                </div>
            </div>								
        </div>
        `, '');         
    addEvLisBook("h3", res);      
    slider();
    findBook();
};





 


