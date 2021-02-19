// GET - получет
fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json);
    })
    .catch(function (reason) {
        console.log(reason);
    });
// POST - создает
fetch('./data.json', { method: "POST" })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(reason => console.log(reason));
    
// POST - добавляет
fetch('./data.json', { method: "PUT" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });
// POST - обновляет
fetch('./data.json', { method: "PATCH" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });
// POST - удаляет
fetch('./data.json', { method: "DELETE" })
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {

    })
    .catch(function (reason) {
        
    });
