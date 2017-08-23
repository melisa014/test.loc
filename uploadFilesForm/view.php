<html>
    <head>
        <script src="/jquery-3.2.1.js"></script>
        <script src="addImage.js"></script>
    </head>
    <body>
        <form method='post' action='controller.php' enctype="multipart/form-data">
            <div class='addImage'>
                <div data-index='0'></div>
                
            </div>
            <input class='addImageSubmit' type="submit" name="addImage" value="+ Изображение"><br><br>
            <input type="submit" name="saveNewGood" value="Сохранить">
        </form>
        
        <div id='formToAddFile' style='display: none'>
            <input class='file' type='file' name='imageFile' placeholder='Выберите изображение'><br> 
            <input class='description' type='text' name='imageDescription' placeholder='Введите описание изображения'><br>
        </div>
        
    </body>
</html>

