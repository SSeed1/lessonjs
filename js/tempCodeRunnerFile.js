'use strict';
var money=+prompt("Ваш бюджет на месяц:",' ');
console.log(money);
var time=prompt("Введите дату в формате YYYY-MM-DD:",'');
console.log(time);
let AppData={
    budget:money,
    timeData:time,
    optionalExpenses:{},
    incom:[],
    savings:false,
    expenses:{},  
};   
for(i=0;i<2;i++){
    let a=prompt("Введите обязательную статью расходов в этом месяце",""),
        b=prompt("Во сколько обойдется");

        AppData.expenses[a]=b;
        if((typeof(a))==='string'&& (typeof(a))!=null &&(typeof(b))!=null
        &&a!=''&&b!=''&&a.length<50){
            console.log("done");
            alert(AppData.budget/30);
        }
}
    AppData.moneyperDay=AppData.budget/30;
    alert("Ежедневный бюджет"+AppData.moneyperDay);
    if(AppData.moneyperDay<100){
        console("Минимальный уровень достатка");
    }else if(AppData.moneyperDay>100 &&AppData.moneyperDay<2000){
        console.log("Средний достатка");
    } else if (AppData.moneyperDay>2000){
        console.log("Высокий достатка");
    }else{
        console.log("Ошибка");
    }

