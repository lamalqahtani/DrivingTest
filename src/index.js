const form = document.querySelector(".test-form");
const testResult = document.querySelector("#result");
const QUESTIONS_NUM = 10;
console.log(form);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let result = {}
    let rightAnsweres = 0;

    for (let index = 0; index < QUESTIONS_NUM; index++) {
        result[`q${index+1}`] = +form.children[index].children[1].value;
        if(+form.children[index].children[1].value == 1){
            form.children[index].style = "color:green";
            ++rightAnsweres;
        }else{
            form.children[index].style = "color:red";
        }
    }
    console.log(result);

    testResult.textContent =  `نتيجتك هي ${rightAnsweres} `
    // console.log('submitted');
})
