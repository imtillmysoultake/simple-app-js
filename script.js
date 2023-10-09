const select1 = document.getElementById("mySelectId");


console.log(select1.options)

select1.options[0] = new Option("Строка списка 0", "str0");
select1.options[1] = new Option("Строка списка 1", "str1");
select1.options[2] = new Option("Строка списка 2", "str2");

const button = document.getElementById("myButton");

button.onclick = () => {
    const input = document.getElementById("myInput");


    // select1.options[select1.options.selectedIndex].text = input.value;
    console.log("hello world!", input.value, select1.options[select1.options.selectedIndex].text)
}

function validation(){

  function createError(input, text){
    const parent = input.parentNode;
    parent.classList.add('error')
    console.log(parent)
  }

  let result = true;

  const allInputs = form.querySelectorAll('input')

  for (const input of allInputs){

    if(input.value==""){
      console.log('error');
      createError('Поле не заполнено')
      result = false
    }
  }
  return result
}
 document.getElementById('form').addEventListener('add-form', function (event) {
   event.preventDefault()
    if (validation(this) == true) {
      alert('Форма успешно проверена')
    }
 })

// log() => console.log("hello world!");
