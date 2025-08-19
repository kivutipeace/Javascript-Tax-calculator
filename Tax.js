document.getElementById("tax_form").addEventListener("submit",function(event){
    event.preventDefault()

    let basic_salary=Number(document.getElementById("basic_salary").value)
    let allowances=Number(document.getElementById("allowances").value)

    function calculate_gross(basic_salary,allowances){
        return basic_salary + allowances
    }
    let gross= calculate_gross(basic_salary,allowances)
    document.getElementById("gross").innerHTML=gross

    function calculate_NHIF(basic_salary,allowances){
        return basic_salary + allowances
    }
    let NHIF=calculate_NHIF(basic_salary,allowances)
    document.getElementById("NHIF").innerHTML=NHIF

    function calculate_NSSF(basic_salary,allowances){
        return basic_salary + allowances
    }
    let NSSF=calculate_NSSF(basic_salary,allowances)
    document.getElementById("NSSF").innerHTML=NSSF

    function calculate_NDHF(basic_salary,allowance){
        return basic_salary + allowances
    }
    let NDHF=calculate_NDHF(basic_salary,allowances)
    document.getElementById("NDHF").innerHTML=NDHF

    function calculate_taxable_income(basic_salary,allowances){
        return basic_salary + allowances
    }
    let taxable_income=calculate_taxable_income(basic_salary,allowances)
    document.getElementById("taxable_income").innerHTML=taxable_income

    function calculate_net_pay(basic_salary,allowance){
         return basic_salary + allowances
    }
    let net_pay=calculate_net_pay(basic_salary,allowances)
    document.getElementById("net_pay").innerHTML=net_pay
    })
