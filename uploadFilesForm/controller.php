<?php
if (!empty($_POST['saveNewGood'])) {
    echo "Загружаем выбранные файлы... <br>";
    echo "<pre>";
    print_r($_FILES);
    echo "<pre>";
}
else {
    echo "Направляем на представление";
}


