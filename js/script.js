$(document).ready(function() {
    var todoItems = [
        {
            text: 'prendere la key',
            completed: false,
        },
        {
            text: 'ricordare a Paperino di usare la pozione da cura',
            completed: true,
        },
        {
            text: 'cancellare WinnieThePooh per sempre',
            completed: false,
        },
        {
            text: 'abolire i minigiochi',
            completed: true,
        }
    ];

    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('#template li');

    //1. Popolazione todo list
    for (var i = 0; i < todoItems.length; i++) {
        var todo = todoItems[i];
        var item = template.clone();
        item.find('.text').text(todo.text);

        if(todo.completed) {
            item.find('.text').addClass('completed');
        }

        //Aggiunta alla lista
        list.append(item);
    }

    //2. Inserimento nuovo todo
    newInput.keyup(function(event) {
        console.log(event.which);

        if(event.which === 13) {
            var text = newInput.val().trim();

            if(text !== '') {
                console.log(text);

                //template
                var item = template.clone();
                item.find('.text').text(text);
                list.append(item);

                //reset 
                newInput.val('');
            }
        }
    });
    //3. Rimozione todo item 
    
    $('body').on('click', '.todos li i', function() {
        $(this).parent().remove();
    });

    //4. Rendi todo completato / da fare
    $('body').on('click', '.todos li span', function() {
        $(this).toggleClass('completed');
    });

});