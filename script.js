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
    let hoursList = [];

    for (; startHour <= endHour; startHour++) {
      hoursList.push(startHour);
    }

    return hoursList
};


const createTodo = (title) => {
    const todo = document.createElement(`div`);
    const todoTitle = document.createElement(`h3`);
    todoTitle.classList.add(`todo__title`)
    const todoBtn = document.createElement(`button`);
    todoBtn.classList.add(`todo__button`)

    todoTitle.innerHTML = title;
    todoBtn.innerHTML = `Delete`;

    todo.addEventListener(`click`, () => todo.classList.toggle(`active`));

    todoBtn.addEventListener(`click`, (event) => {
        event.stopPropagation();
        todo.remove();
    })

    todo.classList.add(`todo`)
    todo.addEventListener(`click`, () => {
      todo.classList.togle(`active`)
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
          const todo = obj.todos.find(item => item.day === day && item.hour === hour);

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
  const thead = createThead(obj);
  const tbody = createTbody(obj);

  table.append(thead, tbody)
  return table
}


const container = document.querySelector(`#container`);

const renderedTable = renderTable(calendarData);

container.append(renderedTable);