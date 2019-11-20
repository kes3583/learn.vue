var Numbers = [0,1,2,3,4,5,6,7,8,9];
var newNumbers = [];
//숫자4개 선언
for (let index = 0; index < 4; index++) {
    let j = Math.floor(Math.random() * (10 - index)); // 숫자가 뽑힐때 기존 numbers 배열도 줄어든다. 
    //console.log(j)
    var pickedNum = Numbers.splice(j,1)[0]  // 숫자뽑기
    newNumbers.push(pickedNum) // 새로운 배열 만들기 
    
}
console.log(newNumbers)

form.addEventListener('submit', function(e){ // 기본으로 새로고침이 된다. 
    e.preventDefault();
    
    var answerNum = document.querySelector('[name="getNumbers"]').value; // 내가 선택한 숫자 4개 갖고오기
    console.log('answerNum', answerNum)
    const myNumbers = newNumbers.join('')
    console.log('newNumbers', myNumbers)
    if (answerNum === myNumbers){
        document.querySelector('h2').innerHTML = '축하합니다. 정답입니다.!'
        //다시 시도할건지 물어봐야할거 같은데? 
        Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        newNumbers = [];
        document.querySelector('h2').innerHTML = ''

    }else{
        var getArrayNums = answerNum.split('')
        console.log('getArrayNums', getArrayNums)
        var values = {
            strike :  0,
            ball : 0
        }
        for (let index = 0; index < 4; index++) {
            values.strike += 1;
            if (getArrayNums[index] === newNumbers[index]){
                values.strike += 1;
                document.querySelector('h1').innerHTML = ''
            }else if{
                values.ball += 1;
            }else{

            }

        }
    }
})
