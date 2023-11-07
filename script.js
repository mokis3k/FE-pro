const API = `https://6519440e818c4e98ac60353a.mockapi.io`;
const THEADTITLES = [`Name`, `Comics`, `Favourite`, `Actions`];
const TABLECONTAINER = document.querySelector(`#heroesTableContainer`);
const heroesForm = document.querySelector(`#heroesForm`);
const comicsSelect = document.querySelector(`#comicsSelect`);
let heroesNameList;

// -----REST Placeholders-----
const JSONPLACEHOLDER_REST = {
  get: (path) => fetch(API + `/${path}`),
  put: (path, id, obj) =>
    fetch(API + `/${path}/${id}`, {
      method: `PUT`,
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    }),
  post: (path, obj) =>
    fetch(API + `/${path}`, {
      method: `POST`,
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    }),
  delete: (path, id) => fetch(API + `/${path}/${id}`, { method: `DELETE` }),
};

// -----REST Function-----
const heroesRest = async (method, path, id, obj) => {
  let request;
  let response;
  try {
    switch (method) {
      case `GET`:
        request = await JSONPLACEHOLDER_REST.get(path);
        if (!request.ok) throw new Error(request.status);
        response = await request.json();
        return response;

      case `PUT`:
        request = await JSONPLACEHOLDER_REST.put(path, id, obj);
        if (!request.ok) throw new Error(request.status);
        response = await request.json();
        return response;

      case `POST`:
        request = await JSONPLACEHOLDER_REST.post(path, obj);
        if (!request.ok) throw new Error(request.status);
        response = await request.json();
        return response;

      case `DELETE`:
        request = await JSONPLACEHOLDER_REST.delete(path, id);
        if (!request.ok) throw new Error(request.status);
        response = await request.json();
        return response;
    }
  } catch (err) {
    console.log(err);
  }
};

// -----New Hero Form-----
heroesForm.addEventListener(`submit`, async (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  formData = Object.fromEntries(formData.entries());
  const newHero = { ...formData, favourite: formData.favourite ? true : false };
  console.log(newHero)
  if (heroesNameList.includes(newHero.name)) {
    console.log(`This hero already exists.`);
  } else {
    let postResponse = await heroesRest(`POST`, `heroes`, newHero);
    console.log(postResponse);
    renderTable();
    e.target.reset();
  }
});

// -----Creating td Default-----
const createDefaultTd = (hero, key) => {
  let td = document.createElement(`td`);
  td.innerHTML = hero[key];
  return td;
};

// -----Creating td For Favourite Hero-----
const createFavouriteTd = (hero, key) => {
  let td = document.createElement(`td`);
  let favouriteCheckbox = document.createElement(`input`);
  favouriteCheckbox.type = "checkbox";
  favouriteCheckbox.checked = JSON.parse(hero[key]);
  favouriteCheckbox.addEventListener(`change`, (e) =>
    favouriteChanged(e, hero)
  );
  td.append(favouriteCheckbox);
  return td;
};

// -----Creating td With Delete Button-----
const createActionsTd = (heroID) => {
  let td = document.createElement(`td`);
  let actionBtn = document.createElement(`button`);
  actionBtn.innerHTML = `Delete`;
  actionBtn.addEventListener(`click`, (e) => deleteButtonHandler(e, heroID));
  td.append(actionBtn);
  return td;
};

// -----Delete Button Handler------
const deleteButtonHandler = async (e, heroID) => {
  e.target.disabled = true;
  deletedHero = await heroesRest(`DELETE`, `heroes`, heroID);
  renderTable();
};

// -----Favourite Checkbox------
const favouriteChanged = async (e, hero) => {
  const updatedHero = {
    ...hero,
    favourite: e.target.checked,
  };
  e.target.disabled = true;
  let putResponse = await heroesRest(`PUT`, `heroes`, hero.id, updatedHero);
  console.log(putResponse);
  e.target.disabled = false;
};

// -----Creating Heroes Table thead-----
const createThead = () => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  THEADTITLES.forEach((columnName) => {
    let th = document.createElement("th");
    th.innerHTML = columnName;
    tr.append(th);
  });

  thead.append(tr);
  return thead;
};

// -----Creating Heroes Table tbody-----
const createTbody = (heroesArray) => {
  let tbody = document.createElement(`tbody`);

  heroesArray.forEach((hero) => {
    let tr = document.createElement("tr");
    Object.keys(hero)
      .filter((key) => key !== `id`)
      .forEach((key) => {
        if (key === `favourite`) {
          let td = createFavouriteTd(hero, key);
          tr.append(td);
        } else {
          let td = createDefaultTd(hero, key);
          tr.append(td);
        }
      });
    let td = createActionsTd(hero.id);
    tr.append(td);

    tbody.append(tr);
  });

  return tbody;
};

// -----Render Comics Options-----
const renderComicsOptions = async () => {
  responseComics = await heroesRest(`GET`, `comics`);
  responseComics.forEach((comics) => {
    const option = document.createElement(`option`);
    option.innerHTML = comics.name;
    option.value = comics.name;
    comicsSelect.append(option);
  });
};

// -----Rendering Heroes Table-----
const renderTable = async () => {
  let heroes = await heroesRest(`GET`, `heroes`);
  heroesNameList = heroes.map((hero) => hero.name);
  let table = document.createElement(`table`);
  table.className = `heroes__table`;
  let tbody = createTbody(heroes);
  let thead = createThead();

  table.append(thead, tbody);

  if (TABLECONTAINER.childNodes.length > 0) {
    TABLECONTAINER.innerHTML = ``;
  }

  TABLECONTAINER.append(table);
};

renderComicsOptions();
if (TABLECONTAINER) renderTable();
