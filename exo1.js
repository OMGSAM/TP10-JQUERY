<!doctype html>
<html>
<head>
    <title>Ex1</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // 1. Cacher les éléments ayant comme classe: 'e'
            $('.e').hide();

            // 2. Afficher le nombre d'input dans la page
            alert($('input').length);

            // 3. Au clic sur le bouton, afficher les valeurs des champs de texte
            $('input[type="button"]').click(function() {
                var nom = $('#nn').val();
                var prenom = $('#pr').val();
                alert('Nom: ' + nom + '\nPrenom: ' + prenom);
            });
        });
    </script>
</head>
<body>
    <nav>
        <ul>
            <li class='e'>HTML5</li>
            <li>Css3</li>
            <li class='e'>Javascript</li>
        </ul>
    </nav>
    <section>
        <form>
            <label for="nn">Nom: </label>
            <input type="text" id="nn"/>
            <label for="pr" id='t'>Prenom: </label>
            <input type="text" id="pr"/>
            <input type="button" value="Tester"/>
        </form>
    </section>
</body>
</html>
