function myFunction() {

    const time = 22;
    const question = prompt('Enter your country');

    if(question == 'UA' && time > 20) {
        console.log('Kyiv 20')
    }
    if(question == 'PL') {
        console.log('Warsaw')
    }
    if(question == 'IT') {
        console.log('Rome')
    }
    if(!question) {
        console.log('Enter your country')
    }
    if(question) {
        console.log('Thank you!')
    }


}

// alert("I am JavaScript");