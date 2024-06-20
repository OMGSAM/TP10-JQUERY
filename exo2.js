<!DOCTYPE html>
<html>
<head>
    <title>Mise en forme via jQuery</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        div {
            width: 50px;
            height: 50px;
            margin: 20px;
            float: left;
            border: 2px red solid;
            padding: 2px;
        }
    </style>
    <script>
        $(document).ready(function() {
            $('div').click(function() {
                $('div').css('background-color', '');
                var prevDiv = $(this).prev('div');
                if (prevDiv.length) {
                    prevDiv.css('background-color', 'green');
                } else {
                    $(this).css('background-color', 'green');
                    alert('Je suis la première div');
                }
            });
        });
    </script>
</head>
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div id="start">7</div>
</body>
</html>
