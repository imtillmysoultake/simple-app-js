const select1 = document.getElementById("mySelectId");


console.log(select1.options)

select1.options[0] = new Option("Строка списка 0", "str0");
select1.options[1] = new Option("Строка списка 1", "str1");
select1.options[2] = new Option("Строка списка 2", "str2");

console.log('SEL::', select1);

const button = document.getElementById("myButton");

button.onclick = () => {
    const input = document.getElementById("myInput");

    //elect1.options[select1.options.selectedIndex].text = input.value;
    console.log("hello world!", input.value, select1.options[select1.options.selectedIndex].text)
}
let input = document.querySelector("#myInput");
input.onblur = function() {
    console.log('BLUR', input.value)
    input.class;
};

input.onfocus = function() {
    console.log('FOCUS', input.value)
};

// function validation(){
//     function createError(input, inputSaveDiv){
//     const parent = input.parentNode;
//     parent.classList.add('error')
//     console.log(parent)
//   }
//
//   let result = true;
//
//   const allInputs = inputSaveDiv.querySelectorAll('input')
//
//   for (const input of allInputs){
//
//     if(input.value == ""){
//       console.log('error');
//       createError('Поле не заполнено')
//       result = false
//     }
//   }
//   return result
// }
//
//  document.getElementById('input').addEventListener('inputSaveDiv', function (event) {
//    event.preventDefault()
//     if (validation(this) == true) {
//       alert( 'успешно проверена')
//     }
//  })
//log() => console.log("hello world!");
