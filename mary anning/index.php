<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!--<link rel="stylesheet" href="css/icon-font.css">-->

    <link rel="stylesheet" href="landing.css">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">


    <title>Mary Anning</title>
</head>

<body>


    <?php include "nav.php" ?>

    <?php include "header.php" ?>







    <main>
        <?php include "about.php" ?>
        <?php include "didyouknow.php" ?>

        <?php include "moreinfo.php" ?>


        <?php include "goodbye.php" ?>


        <?php include "footer.php" ?>





        
        
        <script>
            const get_id = x => document.getElementById(x);
            const log = x => console.log(x);

            const ageAnswer = 32; // PASS MARK
            var feedback = get_id("resultShow");
            const submit = get_id("button");
            const ans = ["You have chosen the right answer", "Incorrect - Please try again"];
            // function to change the answer's background color:
            const bgChange = () => {
                feedback.style.backgroundColor =
                    (feedback.innerHTML == ans[0]) ? "green" : "red";
            };

            const checkAnswer2 = () => {
                const theForm = get_id("quizForm");
                const radioName = theForm.elements.quiz;
                // log(radioName);
                // let olu = [1, 2, 4, 5, 6];
                for (let i = 0; i < radioName.length; i++) {
                    if (radioName[i].checked) {

                        feedback.innerHTML = (parseInt(radioName[i].value) === ageAnswer) ? ans[0] : ans[1];
                    }

                }

                // function for change of bg color
                bgChange();
            };

            submit.addEventListener("click", checkAnswer2);
        </script>

</body>

</html>