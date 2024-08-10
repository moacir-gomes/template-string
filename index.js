import entrada from "readline-sync";
let nome = entrada.question("Bom dia. Informe o seu nome:")
let cargo = entrada.question(`${nome}, informe o seu cargo: `);
let salario = 4000;
let salarioBrutoPres = 80000;
switch(cargo){
    case "gerente":
        salario *= 3.5;
        let salarioBrutoGe = salario;
        console.log(`Sr(a). ${nome}, o salário bruto para gerente nesta empresa é de 
            ${salarioBrutoGe} reais.`);
        let salarioLiquidoGe = salarioBrutoGe - ((salarioBrutoGe * 27.5) / 100);
        console.log(`Sr(a). ${nome}, por conta do imposto de 27,5% seu salário líquido é de 
            ${salarioLiquidoGe} reais.`);
        break;
    case "diretor":
        salario *= 8.5;
        let salarioBrutoDir = salario;
        console.log(`Sr(a). ${nome}, o salário bruto para diretor nesta empresa é de 
            ${salarioBrutoDir} reais.`);
        let salarioLiquidoDir = salarioBrutoDir - ((salarioBrutoDir * 27.5) / 100);
        console.log(`Sr. ${nome}, por conta do imposto de 27,5% seu salário 
            líquido é de ${salarioLiquidoDir} reais.`);
        break;
    case "presidente":
        salarioBrutoPres *= 5;
        let salarioLiquidoPres = salarioBrutoPres - ((salarioBrutoPres * 27.5) / 100);
        console.log(`Sr(a). ${nome}, o salário bruto para presidente nesta empresa é 
            de ${salarioBrutoPres} reais.`);
        console.log(`Sr(a). ${nome}, por conta do imposto de 27,5% seu salário 
            líquido é de ${salarioLiquidoPres} reais.`);
        break;
    default:
        console.log(`Sr(a) ${nome}, não existe o cargo que você digitou nesta 
            empresa.`);
}