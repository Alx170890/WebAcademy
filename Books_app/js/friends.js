//------Выводим время каждую минуту------
import { timeNow } from './modules/time.js';

timeNow("time");
//------Слайдер книг------
const slider = () => {               
    $(".vertical").slick({		        
      vertical: true,
      slidesToShow: 7,
      slidesToScroll: 2,
      verticalSwiping: true,		        
      infinite: false,		        
      draggable: true,
      arrows: false          
});
};

