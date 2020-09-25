//------Выводим время каждую минуту------
const timeNow = (tegClassInner) => {
    let time = document.querySelector(`.${tegClassInner}`);
    let timeNow = new Date().toLocaleTimeString().slice(0,-3);
    time.innerHTML = `${timeNow}`;
    setInterval(() => {
        let timeNow = new Date().toLocaleTimeString().slice(0,-3);
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
const getBooks = () => (fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-books.p.rapidapi.com",
		"x-rapidapi-key": "2f3477a892msh1889542a56384f8p1d5c76jsne7a71c9b8ec3"
	}
})
.then(response => (response.json()))
.then((rest) => {       
    let res = rest.items;    
    return res;
})
.catch(err => {
	console.log(err);
})
);
//------Преобразование данных  в json------
const GuestPost = (bookBye) => {     
    return JSON.stringify(bookBye)      
}; 
//------Добавляем приобретенные книги на сервер------
const postData = (bookBye) => fetch (
    url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: GuestPost(bookBye)
});
//------Активизация кнопки заказа кники------
const btnActive = () => {
    document.querySelector(".addBook__btn").classList.add("activeBtn"); 
}
const btnUnActive = () => {
    document.querySelector(".addBook__btn").classList.remove("activeBtn"); 
}
//------Функция для перезаписи кнопки возврата на пред. страницу------
const backPage = (func) => {
    document.querySelector(".back").addEventListener("click", func);
};
//------Возврат на гланую страницу------
const startPage = () => {
    document.location.href = "../index.html";    
};
//------Возврат на страницу выбора книг------
const backBookColection = () => {    
    document.querySelector(".booksColection").innerHTML = `
    <div class="search">				
        <img src="../img/book.png" alt="serch">				
        <input type="serch" placeholder="What’s the book’s name?">
        <div class="search__book">
		</div>				
    </div>
    <h2>Book colection</h2>
    <div class="books">			
        <div class="vertical slider">
        </div>
        </div>
    `;
    renderBookPromo();     
    btnUnActive();    
};
//------Переходим на страницу подтверждения успешной покупки книги------
const CheckBuyBook = (res) => {     
    let interestingBooks = [];
    for (let i = 0; i < 3; i++) {
        let a = res[Math.floor(Math.random() * res.length)];
        interestingBooks.push(a);
    }    
    document.querySelector(".addBook__btn").addEventListener("click", () => {
        const title = document.querySelector("h3").innerHTML.trim();        
        res.forEach((item) => {                 
            if(item.volumeInfo.title == title) {                
                postData(item);  
            };
        });        
        const content = document.querySelector(".wrapper");
        content.classList.add("buyBook");
        content.innerHTML = `
        <div>
        <div class="content">			
            <img src="../img/check.png" alt="Check">
            <h1>Thank you!</h1>			
            <p>
                You have submitted your first book review. Now it’s time to make some friends.
            </p>
        </div>				
        <a class="addFriends" href="friends.html">Add friends</a>
        <div class="recomendation">
			<h2>You may also be interesed in:</h2>
			<div class="recomendation__books">				
			</div>
        </div>	
        </div>		
        <div class="menu">			
            <div>
                <a href="../index.html">
                    <img src="../img/tab-2.png" alt="home">
                </a>
                <p>My Books</p>
            </div>
            <div class="menu__active">
                <a href="addBook.html">							
                    <img src="../img/tab-3.png" alt="home">
                    <p>Add Review</p>
                </a>				
            </div>
            <div>
                <a href="friends.html">
                    <img src="../img/tab-4.png" alt="home">
                    <p>Notification</p>
                </a>
            </div>
        </div>
        `  
        document.querySelector(".recomendation__books").innerHTML = interestingBooks.reduce((acc, item) => `${acc}
        <div>
            <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
            <h3>${item.volumeInfo.title}</h3>
            <p>${item.volumeInfo.authors}</p>
        </div>
        `, '');
    });
};
//------Возврат на страницу описания книги------
const backBookDesc = () => {    
    document.querySelector(".bookMain").classList.remove("dispNone");
    document.querySelector(".Main_text_text").classList.remove("descriptionText"); 
    backPage(backBookColection);    
};
//------Переход на предпросмотр текста книги------
const textDescription = () => {
    document.querySelector(".fullSynopsis").addEventListener("click", () => {         
        document.querySelector(".bookMain").classList.add("dispNone");
        document.querySelector(".Main_text_text").classList.add("descriptionText"); 
        document.querySelector(".back").removeEventListener('click', backBookColection, false)
        backPage(backBookDesc);         
    });
};
//------Добавление краткого описания выбранной книги------
const addEvLisBook = (teg, res) => {     
    document.querySelectorAll(teg).forEach((item) => {           
        item.addEventListener("click", () => {           
            res.forEach((items) => {                 
                if(items.volumeInfo.title == item.innerHTML.trim()) {                           
                    btnActive()            
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
                            Full Synopsis
                        </div>
                    </div>
                    `            
                    document.querySelector(".back").removeEventListener('click', startPage, false)
                    backPage(backBookColection);                         
                    textDescription(); 
                    CheckBuyBook(res);                                      
                };
            });
        });       
    });    
};
//------Поиск по списку книг------
const searchBook = async() => { 
    const res = await getBooks();       
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
//------Добавление всех книг на страницу------
async function renderBookPromo() {
    const res = await getBooks();
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
    document.querySelector(".back").removeEventListener('click', backBookColection, false)
    document.querySelector(".back").removeEventListener('click', backBookDesc, false)
    backPage(startPage);     
    slider();   
    findBook(); 
};
renderBookPromo();





