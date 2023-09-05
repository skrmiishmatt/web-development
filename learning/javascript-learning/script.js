var database = [
    {
        username: 'matt',
        password: 'password'
    },
    {
        username: 'sally',
        password: 'password'
    },
    {
        username: 'ingrid',
        password: 'password'
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

var usernamePrompt = prompt('Username');
var passwordPrompt = prompt('Password');

function loginValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (loginValid(username, password)) {
        console.log(newsfeed);
    } else {
        console.log('invalid login')
    }
}


signIn(usernamePrompt, passwordPrompt);
