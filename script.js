const calendarData = {
    days: [`Monday`, `Tuesday`, `Friday`],
    hours: {
      start: 10,
      end: 17,
    },
    todos: [
      {
        day: `Monday`,
        hour: 10,
        title: `First todo`,
      },
      {
        day: `Monday`,
        hour: 13,
        title: `Second todo`,
      },
      {
        day: `Tuesday`,
        hour: 12,
        title: `Third todo`,
      },
      {
        day: `Tuesday`,
        hour: 17,
        title: `Fourth todo`,
      },
      {
        day: `Friday`,
        hour: 14,
        title: `Fifth todo`,
      },
    ],
  };


const getHours = (hours) => {
    let startHour = hours.start;
    let endHour = hours.end;
    let hours = [];

    for (; startHour <= endHour; startHour++) {
        hours.push(startHour);
    }

    return hours
};


const createTodo = (title) => {
    const todo = document.createElement(`div`);
    const todoTitle = document.createElement(`h3`);
    const todoBtn = document.createElement(`btn`);

    todoTitle.innerHTML = title;
    todoBtn.innerHTML = `Delete`;

    todo.addEventListener(`click`, () => todo.classList.toggle(`active`));

    todoBtn.addEventListener(`click`, (event) => {
        event.stopPropagation();
        todo.remove();
    })

    todo.append(todoTitle, todoBtn);

    return todo
}


const createThead = (obj) => {
    const thead = document.createElement(`thead`);
    thead.innerHTML = `<tr><th></th>${obj.days.map(day => `<th>${day}</th>`).join(``)}</tr>`
    return thead;
}


const createTbody = (obj) => {
    const tbody = document.createElement(`tbody`);
    const hours = getHours(obj.hours);

    hours.forEach(hour => {
        tr = document.createElement(`tr`);
        
    })
}


const container = document.querySelector(`#container`);

const table = document.createElement(`table`)
const tbody = document.createElement(`tbody`);

container.append(table)
table.append(tbody);
tbody.append(createThead(calendarData));