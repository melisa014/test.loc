<html>
    <head>
    </head>
    <body>
        <form method='post' action='controller.php' enctype="multipart/form-data">
            <div>
                <div>
                    <input type='file' name='imageFile-1' placeholder='Выберите изображение'><br> 
                    <input type='text' name='imageDescription-1' placeholder='Введите описание изображения'><br>
                </div>
                <div>
                    <input type='file' name='imageFile-2' placeholder='Выберите изображение'><br> 
                    <input type='text' name='imageDescription-2' placeholder='Введите описание изображения'><br>
                </div>
                <div>
                    <input type='file' name='imageFile-3' placeholder='Выберите изображение'><br> 
                    <input type='text' name='imageDescription-3' placeholder='Введите описание изображения'><br>
                </div>
            </div>
            <input class='addImageSubmit' type="submit" name="addImage" value="+ Изображение"><br><br>
            <input type="submit" name="saveNewGood" value="Сохранить">
        </form>
        
        
        
    </body>
</html>

