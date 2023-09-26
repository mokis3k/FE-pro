const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 25,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];


// -------Creating class User-------
class User{
    constructor(obj){
        obj = JSON.parse(JSON.stringify(obj));
        Object.assign(this, obj);
    }

    render(){
        return `
        <div class="user__info">
            <div class="user__info--data">
                <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                <div class="user__naming">
                    <p>Name: <b>${this.name}</b></p>
                    <p>Age: <b>${this.age}</b></p>
                </div>
            </div>
            <div class="user__info--role ${this.role}">
                <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                <p>${this.role}</p>
            </div>
        </div>`
    }

    renderCourses(coursesClass, userCourses){
        return `
        <div class="${coursesClass}">${userCourses}</div>`
        }
    }


// -------Extending class Student from class User-------
class Student extends User{
    constructor(obj){
        super(obj); 
    }

    renderCourses(){
            return super.renderCourses(`user__courses`,
                this.courses.map(course => `<p class="user__courses--course ${this.role}">${course[`title`]}
                <span class="${markGradation(course[`mark`])}">${markGradation(course[`mark`])}</span></p>`)
                .join(``))
    }
}


// -------Extending class Lector from class User-------
class Lector extends User{
    constructor(obj){
        super(obj);
    }

    renderCourses(){
            return super.renderCourses(`user__courses admin--info`,
                this.courses.map(course => `
                <div class="user__courses--course ${this.role}">
                    <p>Title: <b>${course[`title`]}</b></p>
                    <p>Lector's score: <span class="${markGradation(course[`score`])}">${markGradation(course[`score`])}</span></p>
                    <p>Average student's score: <span class="${markGradation(course[`studentsScore`])}">${markGradation(course[`studentsScore`])}</span></p>
                </div>`)
                .join(``))
        }
}


// -------Extending class Admin from class User-------
class Admin extends User{
    constructor(obj){
        super(obj);
    }

    renderCourses(){
        return super.renderCourses(`user__courses admin--info`,
            this.courses.map(course => `
            <div class="user__courses--course ${this.role}">
                <p>Title: <b>${course[`title`]}</b></p>
                <p>Admin's score: <span class="${markGradation(course[`score`])}">${markGradation(course[`score`])}</span></p>
                <p>Lector: <b>${this.name}</b></p>
            </div>`)
            .join(``))
        }
}


// -------Equating mark to Gradation values-------
markGradation = mark => {
    if (mark <= 20) {
        return gradation[20]
    } else if (20 < mark && mark <= 55) {
        return gradation[55]
    } else if (55 < mark && mark <= 85) {
        return gradation[85]
    } else return gradation[100]
}


// ------------------------------------------
const USER_ROLES = {
    student: obj => new Student(obj),
    admin: obj => new Admin(obj),
    lector: obj => new Lector(obj)
};


// -------Rendering Body-------
users
    .map(obj => {
        let userRole = obj.role;
        let user = USER_ROLES[userRole] ? USER_ROLES[userRole](obj) : new User(obj);
        return user
    })
    .forEach(user => {
        document.write(`
        <div class="user">
            ${user.render()}
            ${(user.courses) ? user.renderCourses() : `<span></span>`}
        </div>`)
    });