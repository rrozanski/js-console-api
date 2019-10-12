function showLog() {
    console.log('userId: ', 123);
}

function showLogWithStyles() {
    console.log('%cHello %cWorld%c!',
        'font-size: 2rem',
        'font-size: 2rem; font-style: italic; font-weight: 700; color: orange;',
        'font-size: 2rem; font-style: normal; font-weight: normal; color: #000000;');
}

function showInfo() {
    console.info('userId: ', 123);
}

function showWarn() {
    console.warn('Used method is deprecated!');
}

function showError() {
    console.error('User with given ID not found!');
}

function showTrace() {
    console.trace('id:', 123);
}

function showTableForArray() {
    const jsFrameworks = [
        'Angular',
        'React',
        'Vue'
    ];

    console.table(jsFrameworks);
}

function showTableForObject() {
    const user = {
        id: 1,
        firstName: 'John',
        lastName: 'User',
        age: 25
    };

    console.table(user);
}

function showTableForArrayOfObjects() {
    const users = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Admin',
            age: 50
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'User',
            age: 25
        }
    ];

    console.table(users);
    console.table(users, ['firstName', 'age']);
}

function showDir() {
    const user = {
        id: 1,
        firstName: 'John',
        lastName: 'User',
        age: 25
    };

    console.dir(user);
}

function showDirXml() {
    const container = document.getElementsByClassName('container');

    console.dirxml(container);
}

function showTime() {
    function fib(num) {
        if (num <= 1) {
            return 1
        }

        return fib(num - 1) + fib(num - 2);
    }

    console.time('firstResult');
    console.log(fib(5));
    console.timeEnd('firstResult');

    console.log('\n----------\n\n');

    console.time('secondResult');
    console.log(fib(40));
    console.timeEnd('secondResult');

    console.log('\n----------\n\n');
}

function showAssert() {
    console.assert(true === true, 'True is true, simple.');
    console.assert(true !== true, 'Something is really wrong...');
}

function showGroup() {
    console.group('USER DATA');
    console.log('id: ', 1);
    console.log('First Name: ', 'John');
    console.log('Last Name: ', 'Assert');

    console.group('TOP SECRET');
    console.log('Login: ', 'john.assert');
    console.log('Password: ', 'password123');
    console.groupEnd();

    console.groupCollapsed('NOT IMPORTANT');
    console.log('a: ', 1);
    console.log('b: ', 2);
    console.log('c: ', 3);
    console.groupEnd();
    console.groupEnd();
}

function showCount() {
    const items = [
        { id: 1, isActive: false },
        { id: 2, isActive: true },
        { id: 3, isActive: false },
        { id: 4, isActive: false },
        { id: 5, isActive: true },
    ];

    items.forEach((item) => {
        if (item.isActive) {
            console.count('active');
        } else {
            console.count('inactive');
        }
    });
}

function clearConsole() {
    console.clear();
}
