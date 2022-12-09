class AlarmClock {
    constructor() {
        let alarmCollection; 
        let timerId ;

        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, timerId) {
      if(typeof this.timerId === 'undefined') {
        throw new Error("ID не передан");
      };

      const alarm = {time: time, callback: callback, id: timerId};

      if(this.alarmCollection.find(el => el.id === timerId) != undefined) {
        console.error('Такой ID уже существует');
        return;
      };
        if (this.alarmCollection === undefined) {
            this.alarmCollection = [alarm];
        } else {
            this.alarmCollection.push(alarm);
        };

        
    }

    removeClock(timerId) {
        function filterByID(item) {
            if (Number.isFinite(item.id) && item.id !== timerId) {
              return true
            }
            timerId++
            return false;
        };
        let arrByID = this.alarmCollection.filter(filterByID);

        if(arrByID === this.alarmCollection) {
            return false;
        } else {
            this.alarmCollection = arrByID;
            return true;
        };
    }

    getCurrentFormattedTime() {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let currentTime = (`${hours}:${minutes}`);
        return currentTime;
    }

    start() {
        function checkClock(alarm) {
            if(alarm.time === getCurrentFormattedTime()) {
                alarm.callback(); // тут что-то не то...
            }
        }
    }

    stop() {
        // Сделайте проверку существования идентификатора текущего таймера.
        // Если у идентификатора текущего таймера есть значение,
        // вызовите функцию clearInterval для удаления интервала.
        // Ещё удалите значение из свойства «идентификатор текущего таймера».
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Id звонка ${element.id}, время звонка ${element.time}`));
    }

    clearAlarms() {
        clearInterval();
        this.alarmCollection.length = 0;
    }
}
