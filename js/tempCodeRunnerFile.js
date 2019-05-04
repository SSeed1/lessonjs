var money=prompt("Ваш бюджет на месяц:",' ');
console.log(money);
var time=prompt("Ваша дата рождения-Введите дату в формате YYYY-MM-DD:",'');
console.log(time);
let AppData={
    budget:money,
    timeData:time,
    expenses:{
        MandatoryExpenses1:prompt("Введите обязательную статью расходов в этом месяце",""),
        WillCost1:prompt("Во сколько обойдется"),
        
        MandatoryExpenses2:prompt("Введите обязательную статью расходов в этом месяце",""),
        WillCost2:prompt("Во сколько обойдется"),

        MandatoryExpenses1:WillCost1,
        MandatoryExpenses2:WillCost2,

    },

    optionalExpenses:{},
    incom:[],
    savings:false
    

};
alert(AppData.budget/30);