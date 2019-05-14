'use strict';

var money,time;
function start(){
   money=+prompt("Ваш бюджет на месяц:","");
    time=prompt("Введите дату в формате YYYY-MM-DD:","");

 while(isNaN(money)||money==""|| money==null)
 {
    money=+prompt("Ваш бюджет на месяц:",' ');
 }
}
start();
let AppData={
    budget:money,
    timeData:time,
    optionalExpenses:{},
    incom:[],
    savings:true,
    expenses:{},  
};   
function chooseExpenses(){
    for(let i=0;i<2;i++){
        let a=prompt("Введите обязательную статью расходов в этом месяце",''),
            b=prompt("Во сколько обойдется",'');
    
            if((typeof(a))==='string'&& (typeof(a))!=null &&(typeof(b))!=null
            &&a!=''&&b!=''&&a.length<50){
                console.log("done");
                alert(AppData.budget/30);
                AppData.expenses[a]=b;
            }else{
                i=i-1;
            }
        }
    }
chooseExpenses();
function detectDayBudget(){
    AppData.moneyperDay=(AppData.budget/30).toFixed();
    alert("Ежедневный бюджет:"+AppData.moneyperDay+"грн");
}    
detectDayBudget();
function detectLevel(){   
    if(AppData.moneyperDay<100){
        console.log("Минимальный уровень достатка");
    }else if(AppData.moneyperDay>100 &&AppData.moneyperDay<2000){
        console.log("Средний достатка");
    } else if (AppData.moneyperDay>2000){
        console.log("Высокий достатка");
    }else{
        console.log("Ошибка");
    }
}
detectLevel();
    function checkSavings(){
        if(AppData.savings==true){
            let save=+prompt("Какова сумма накоплений?"),
                percent=+prompt("Под какой процент")
                AppData.moneyInCome=save/100/12*percent;
                alert("Доход в месяц с вашего депозита:"+AppData.moneyInCome);
        }
    }
checkSavings();
function chooseOptExpenses() {                            

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();