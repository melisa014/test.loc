$(function(){
    $('img').css('cursor', 'pointer');
//    loadFormToAddImage();
    showFormToAddImage();
});

function loadFormToAddImage()
{
    $('input.addImageSubmit').on('click', function(){
        
        $.ajax({
            url: '/index.php?route=ajax/loadFormToAddImage',
            dataType: "html",
        })
        .done(function(res){
            console.log('ответ: ' + res);
            $('div.addImage').append(res);
//            $('#addedImage').attr('data', )
            $('div.addImage :last-child').fadeIn(500);
        })
        .fail(function(xhr, status, error){

            console.log('ajaxError xhr:', xhr); // выводим значения переменных
            console.log('ajaxError status:', status);
            console.log('ajaxError error:', error);

            // соберем самое интересное в переменную
            var errorInfo = 'Ошибка выполнения запроса: '
                    + '\n[' + xhr.status + ' ' + status   + ']'
                    +  ' ' + error + ' \n '
                    + xhr.responseText
                    + '\n'
                    + xhr.responseJSON;

            console.log('ajaxError:', errorInfo); // в консоль
            alert(errorInfo); // если требуется и то на экран
        });
        return false;
    });
}

function showFormToAddImage()
{
    $('input.addImageSubmit').on('click', function(){
        console.log('JS включился');
        
        // Получаем индекс новой формы добавления файла
        var index = $('div.addImage :last-child').attr('data-index');
        var newIndex = +index + 1;
        
        // Клонируем форму и присваеваем ей новый индекс
        $('#formToAddFile').clone()
                .appendTo('div.addImage')
                .attr('data-index', newIndex) 
                .attr('id', 'formToAddFile-' + newIndex);
        
        // Присваиваем индивидуальные имена input-ам
        $('#formToAddFile-' + newIndex+ ' .file').attr('name', 'imageFile-' + newIndex);
        $('#formToAddFile-' + newIndex+ ' .description').attr('name', 'imageDescription-' + newIndex);
        
        // Показываем форму
        $('div.addImage :last-child').fadeIn(500);
        return false;
    });
}