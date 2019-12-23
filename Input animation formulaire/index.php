<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Input Animation</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Animation Input</h1>
    <form class="form" method="POST" action="mail.php" autocomplete="off">
        <div class="form-name">
            <input class="input-name" type="text" name="name" required>
            <label for="name" class="label-name">
                <span class="content-name">Name</span>
            </label>
        </div>
        <div class="form-surname">
            <input type="text" name="surname" required>
            <label for="surname" class="label-surname">
                <span class="content-surname">Surname</span>
            </label>
        </div>
        <div class="form-email">
            <input type="text" name="email" required>
            <label for="email" class="label-email">
                <span class="content-email">email</span>
            </label>
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
        <div class="submit"><input type="submit" value="Envoi / Send"></div>
    </form>
    <?php
    if (isset($_POST['message'])) {
        $position_arobase = strpos($_POST['email'], '@');
        if ($position_arobase === false)
            echo '<p>Votre email doit comporter un arobase.</p>';
        else {
            $retour = mail('emmanueldev@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: ' . $_POST['email']);
            if($retour)
                echo '<p>Votre message a été envoyé.</p>';
            else
                echo '<p>Erreur.</p>';
        }
    }
    ?>
    <script src="main.js"></script>
</body>

</html>