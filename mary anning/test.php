<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

  <link rel="stylesheet" href="test.css" />


  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">

  <title>Test</title>
</head>

<body>
  <h2 id="head1" class="heading-secondary">
    quiz time!!
  </h2>
  <form id="quizForm">

    <div class="quizSection container mt-4  p-3 text-black" id="quizSection">


      <label> How old is Mary Anning? </label>
      <br />
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="quiz" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="50" />
        <label class="form-check-label" for="inlineRadio1">50 years</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="quiz" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="32" />
        <label class="form-check-label" for="inlineRadio2">32 years</label>
      </div>

      <br /><br />


      <button id="button" type="button" class="btn btn-info">Try it</button>
      <br />




      <p id="resultShow" class="resultShow"></p>
      <p id="demo"></p>
    </div>
  </form>

  <script src="quiz.js"></script>
</body>

</html>