//Задание №1
function task01() {
    let reg_control = /^\d+$/;
    let num = document.getElementById("tsk01-number").value;
    if(!reg_control.test(num)){
        alert("Вы ввели что-то не являющееся целым числом. Что-то пошло не так.");
        return;   
    }
    let reg = /\d/g;
    let array = num.match(reg);
    if(array==null) {document.getElementById("task-result-01").innerText = "вы ввели что то не то"}
    let nums = array.map(Number);
    let result = nums.reduce(function(sum, current) {return sum + current;}, 0);

    document.getElementById("task-result-01").innerText = result;
}

//Задание №2
function task02_symbol_validate() {
    let smb = document.getElementById("tsk02-smbl").value;
    let reg = new RegExp(`${smb}`, "i");
    let str = document.getElementById("tsk02-str").value;
     
    if(!reg.test(str)) {
        alert(`Указанный символ "${smb}" не входит в строку`);
        document.getElementById("tsk02-smbl").value="";
    }
}

function task02() {
    let smb = document.getElementById("tsk02-smbl").value;
    let reg = new RegExp(`${smb}`, "ig"); 
    let str = document.getElementById("tsk02-str").value;
    str = str.replace(reg, smb+smb);

    document.getElementById("task-result-02").innerText = str;
}

//Задание №3
function task03() {
    let pass = document.getElementById("tsk03-str").value;
    if(pass=="") {alert("Надо все-таки ввести пароль"); return;}
    let result = "";
    //Проверим на количество символов
    let reg1 = /^.{9,}$/i;
    result += `Содержит от 9 символов: ${reg1.test(pass)}`;
    //Проверим что содержит англ. буквы нижнего и верхнего регистра.column
    let reg2 = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
    result += `\nСодержит анг. буквы верх. и нижн. регистра: ${reg2.test(pass)}`;
    //Проверим что содержит 3 и больше цифр
    let reg3 = /\d/g;
    let num_arr = pass.match(reg3);
    //Если ничего не найдент - будет null - доп проверка
    num_arr = (num_arr == null) ? []:num_arr;
    result += `\nСодержит более двух цифр: ${num_arr.length>=3}`;
    //Содержит неалфавитные символы
    let reg4 = /[!@#$%^&*]/g;
    result += `\nСодержит не алфавитный символы: ${reg4.test(pass)}`;
    document.getElementById("task-result-03").innerText = result;
}

//Задание №4
function task04() {
    //Получим значения со страницы
    let str = document.getElementById("tsk04-str").innerText;
    console.log(str);
    //Разобьем строку недели в массив (можно через split(" "))
    let str_arr = str.match(/[а-я]{1,}/ig);
    console.log(str_arr);
    //Получим строку поиска
    let fnd = document.getElementById("tsk04-fnd").value;
    console.log(fnd);
    //Разобьем искомое слово 
    let fnd_arr = fnd.match(/./ig);
    
    console.log(fnd_arr);

    //Обойдем массив исходных слов
    let word = "";
    for(let i=0; i<str_arr.length; i++) {
        let str_init = str_arr[i];
        let n=0;
        for(let j=0; j<fnd_arr.length; j++) {
            let reg = new RegExp(`(?=.*)${fnd_arr[j]}`,"ig");
            if(reg.test(str_init)) {
                n += 1;
            }
        }    
        if(fnd_arr.length-n <=1) { 
            word = str_init;
            break;
        }
    }

    let result = (word == "") ? "Слово не найдено." : `Найденное слово: ${word}`;
    document.getElementById("task-result-04").innerText = result;
    
}

