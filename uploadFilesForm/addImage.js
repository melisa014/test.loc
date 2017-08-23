$(function(){
    showFormToAddImage();
});

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