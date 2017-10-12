$(function(){
    init();
});

function init() 
{
    // немного jQuery
//    $('body').css({
//        'background-image' : 'url(/images/Mickey.jpg)',
//        'background-size' : '100%',
//        'background-repeat' : 'no-repeat'
//    }); 
    
    // задачи из learn.javascript
    //Структуры данных -> Строки
    // #1 
    var string = "вася";
    var nextString = "николай Петрович";
    var emptyString = "";
    function upFirst(str) {
        var result = str.charAt(0).toUpperCase() + str.slice(1);
        return result;
    }

    console.log(upFirst(string));
    console.log(upFirst(nextString));
    console.log(upFirst(emptyString));
    
    // #2
    function checkSpam(str) {
        var str = str.toLowerCase();
        var pos = 0;
        while (pos <= str.length) {
            if (str.indexOf('xxx', pos)) {
                pos++;
            }
            else {
                console.log('Внимание, спам!');
                pos++;
            }
        }
    }
    var spam = "XXX another XXX and all xxx";
    checkSpam(spam);
    
    // Структуры данных -> Массивы: перебирающие методы
    // Example
    var languages = ['php', 'python', 'javascript'];
    var p_languages = languages.filter(function(item){
        return item[0] == 'p';
    });
    console.log(p_languages);
    
    // #2
    var arr = ["Есть", "жизнь", "на", "Марсе"];
    var arrLength = arr.map(function(word){
        return word.length;
    });
    console.log( arrLength ); // 4,5,2,5
    
    // #3
    var numbers = [1, 2, 3, 4, 5];
    function getSums(arr)
    {
        var result = [];
        if(!arr.length) return result;
        var totalSum = arr.reduce(function(sum, item){
            result.push(sum)
            return sum + item;
        });
        result.push(totalSum);
        return result;
    }
    console.log(getSums(numbers));
    
}

