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
        const tr = document.createElement(`tr`);
        const td = document.createElement(`td`);

        td.innerHTML = `${hour}:00`;
        tr.append(td);

        obj.days.forEach(day => {
          const td = document.createElement(`td`);
          const todo = obj.todo.find(obj.todos.day === day && obj.todos.hour === hour);

          if (todo) {
            td.append(createTodo(todo.title));
          }

          tr.append(td);
        })

        tbody.append(tr);
    })
    return tbody;
};


const renderTable = (obj) => {
  const table = document.createElement(`table`);
  const thead = document.createThead(obj);
  const tbody = document.createTbody(obj);

  tbody.append(thead, tbody)
}


const container = document.querySelector(`#container`);

const renderedTable = renderTable(calendarData);

container.append(renderedTable);