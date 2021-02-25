const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Short bio?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'Linkedin URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'Github URL?',
            name: 'github',
        },
    ]).then((response) =>
        fs.writeFile(
            `./dist/index.html`,

            `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
                <link rel="stylesheet" href="style.css">
                <title>Document</title>
            </head>
            
            <body>
                <div class="row">
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                        </div>
                    </div>
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                        </div>
                    </div>
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                        </div>
                    </div>
                </div>
            
                <div class="row">
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
                        </div>
                    </div>
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                        </div>
                    </div>
                </div>
            
            
                <script src="code.js"></script>
            </body>
            
            </html>
`

            ,
            (err) => err ? console.log("There was an error!") : console.log("Successfully appended to file!")


        )
    );
