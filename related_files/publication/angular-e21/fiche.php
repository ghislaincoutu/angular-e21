<?php
$file21 = $_GET['id'];
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <base href="/r002/angular-e21/">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <meta name="description" content="angular-e21">
  <meta name="author" content="Ghislain Coutu">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script src="assets/js/custom.js"></script>
  <title>angular-e21</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      color: #333;
      background-color: #eee;
    }
    nav {
      margin: 10px 0;
      padding: 10px 15px;
      background-color: #eee;
    }
    main {
      padding: 10px;
      min-height: 300px;
      border: 1px dashed darkmagenta;
    }
    article {
      margin: 15px 0;
    }
    h1 {
      margin: 0 0 4px 0;
      font-size: 2rem;
      font-weight: normal;
    }
    h2 {
      margin: 12px 0;
      font-size: 1.6rem;
      font-weight: normal;
    }
    h2:first-child {
      margin-top: 0;
    }
    a {
      color: #009;
      text-decoration: none;
    }
    p {
      margin: 0 0 12px 0;
      padding: 0;
    }
    p.subtitle {
      margin: 0 0 6px 0;
      color: darkmagenta;
      font-size: 1.3rem;
    }
    p.id01 {
      margin: 0;
      padding: 5px;
      color: #8b008b;
      background-color: #eee;
    }
    .container {
      margin: 0 auto;
      padding: 15px;
      max-width: 1200px;
      background-color: #fff;
    }
    .description {
      padding: 10px;
      color: #fff;
      background-color: darkmagenta;
    }
    .description:first-child {
      margin-bottom: 10px;
    }
    .description h2 {
      margin: 0 0 6px 0;
    }
    .description p:last-child {
      margin-bottom: 0;
    }
    .button01 {
      margin: 10px 0;
      padding: 10px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      color: #fff;
      background-color: darkmagenta;
      border: none;
    }
    .button01:hover {
      background-color: black;
    }

  </style>
</head>

<body>
  <div class="container">
    <header>
      <h1>Fiches grammaticales (test 1)</h1>
      <p class="subtitle">Test de programmation avec Angular 15</p>
      <p>Version du 2023-07-13</p>
    </header>
    <nav>
      <a href="accueil">Accueil</a> |
      <a href="liste-sommaire">Liste sommaire</a> |
      <a href="liste-detaillee">Liste détaillée</a>
    </nav>
    <main>
      <div class="description">
        <h2>Vue fiche</h2>
        <p>Affichage d'une fiche grammaticale sélectionnée par l'utilisateur</p>
      </div>
      <?php
      echo '<p class="id01">' . $_GET['id'] . '</p>';
      include "fiches/$file21/include.html";
      ?>
    </main>
  </div>
</body>

</html>
