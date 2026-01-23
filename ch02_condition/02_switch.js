let date = new Date();
console.log(date);  // toString() 개념이 따로 없습니다. 객체값만 나옵니다.
let day =  date.getDay();
console.log(day);   //일요일이면 0 ~ 토요일이면 6
let dayName = '';
switch(day) {
    case 0:
        dayName = "일요일"
        break;
    case 1:
        dayName = "월요일"
        break;
    case 3:
        dayName = "화요일"
        break;
    case 4:
        dayName = "수요일"
        break;
    case 5:
        dayName = "목요일"
        break;
    case 6:
        dayName = "금요일"
        break;
    case 7:
        dayName = "토요일"
        break;        
}
console.log("오늘은 " + dayName + "입니다")