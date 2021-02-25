function generateHtmlPage(response) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">


    <title>Mini Project 28</title>
</head>
<body>
    <style>
    .container {
        background-color: rgb(182,179,179);
    }
    li {
        margin-bottom:  10px;         
    }
    </style>

    <div class="jumotron jumbotron-fuid">
        <div class="container">
            <h1 class="display-4">${response.name}</h1>
            <p class="lead">${response.location}</p>
            <h3>${response.bio}</h3>
            <ul class="list-group">
                <li class="list-group-item">${response.linkedin}</li>
                <li class="list-group-item">${response.github}</li>
            </ul>
        </div>
    </div>
</body>
</html>
    
    `
}

module.exports = generateHtmlPage;