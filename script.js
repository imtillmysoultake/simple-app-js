const select1 = document.getElementById("mySelectId");


console.log(select1.options)

select1.options[0] = new Option("Строка списка 0", "str0");
select1.options[1] = new Option("Строка списка 1", "str1");
select1.options[2] = new Option("Строка списка 2", "str2");

const button = document.getElementById("myButton");

button.onclick = () => {
    const input = document.getElementById("myInput");

    input.value = 'hello';

    // select1.options[select1.options.selectedIndex].text = input.value;
    console.log("hello world!", input.value, select1.options[select1.options.selectedIndex].text)
}

// log() => console.log("hello world!");