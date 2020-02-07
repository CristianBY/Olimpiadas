<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="script.js"></script>

</head>

<body>

    <?php
    include("functions.php");
    $pregunta = mt_rand(1,10);
    

    ?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php
                echo getQuestion($pregunta);
                ?>


            </div>
        </div>


        <div class="row">
            <div class="col-6">
                <input type="text" id ="<?php echo getAnswer($pregunta); ?>" hidden>
                <p class="btn btn-primary col-6" id="A">


                    <?php echo getAnswers($pregunta)[0] ?>
                </p>
            </div>
            <div class="col-6">
                <p class="btn btn-primary col-6" id="B"> <?php echo getAnswers($pregunta)[1] ?>
                </p>


            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <p class="btn btn-primary col-6" id="C"> <?php echo getAnswers($pregunta)[2] ?>
                </p>
            </div>
            <div class="col-6">
                <p class="btn btn-primary col-6" id="D"> <?php echo getAnswers($pregunta)[3] ?>
                </p>
            </div>
        </div>





    </div>


</body>

</html>