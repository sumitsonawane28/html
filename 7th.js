$(document).ready(function () {

    $('#click-box').on('click', function () {

        $(this).toggleClass('highlight');

        $(this).animate(
            {
                width: "toggle",
                opacity: "toggle"
            },
            500,
            function () {
                alert('Box visibility animated!');
            }
        );

    });


    $('#hover-box').hover(

        function () {

            $(this)
                .addClass('animated')
                .css('transform', 'scale(1.2)');

            $(this).text('Whoa! Bigger!');

        },

        function () {

            $(this).css('transform', 'scale(1)');

            $(this).text('Hover Over Me!');

            setTimeout(() => {
                $(this).removeClass('animated');
            }, 300);

        }

    );


    $('#input-field').on('input', function () {

        const inputText = $(this).val();

        $('#feedback')
            .hide()
            .text('You typed: ' + inputText)
            .fadeIn(300);

    });

});