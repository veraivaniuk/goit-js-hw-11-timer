import './styles.css';
class CountdownTimer {
    constructor({ selector, targetDate} ) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        //ссылки на значения таймера
        this.day = document.querySelector('span[data-value="days"]');
        this.hour = document.querySelector('span[data-value="hours"]');
        this.min = document.querySelector('span[data-value="mins"]');
        this.sec = document.querySelector('span[data-value="secs"]');
    }

  //вспомагательная функция, добавляет нолик к единичному значению числа на таймере
    pad (value) {
        return String(value).padStart(2, '0');
    }
    //фуенкция обновляет данныедля таймера
    updateDateForTimer () {
        const curentDate = Date.now();

        if(curentDate>=this.targetDate.getTime()){
            this.selector.innerHTML = `We have reached ${this.targetDate.getDate()}.${this.targetDate.getMonth()+1}.${this.targetDate.getFullYear()}`;
            return ;
        } else {
        
        let days = Math.floor((this.targetDate.getTime() - curentDate)/ (1000 * 60 * 60 * 24));
        let hours = Math.floor(((this.targetDate.getTime() - curentDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor(((this.targetDate.getTime() - curentDate) % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor(((this.targetDate.getTime() - curentDate) % (1000 * 60)) / 1000);

        this.day.textContent = this.pad(days); 
        this.hour.textContent = this.pad(hours);
        this.min.textContent = this.pad(mins);
        this.sec.textContent = this.pad(secs);
        }
    };

    //фуекция которая запускает таймер
    start () {
        //записываем обновленные значения для загрузки страницы
        this.updateDateForTimer();

        const intervalID = setInterval(()=>{
            this.updateDateForTimer();
        }, 1000);
    }
}
  

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Jun 01, 2021'),
});

timer.start();
