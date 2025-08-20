document.getElementById("tax_form").addEventListener("submit", function(event) {
    event.preventDefault();

    let basic_salary = Number(document.getElementById("basic_salary").value);
    let allowances = Number(document.getElementById("allowances").value);

    // 1. Gross Salary
    function calculate_gross(basic_salary, allowances) {
        return basic_salary + allowances;
    }
    let gross = calculate_gross(basic_salary, allowances);
    document.getElementById("gross").innerHTML = gross.toFixed(2);

    // 2. NSSF (Employee contribution, 2025 rates)
    function calculate_NSSF(salary) {
        let RATE = 0.06;   
        let LEL = 8000;    
        let UEL = 72000;   

        let tier1 = Math.min(salary, LEL);
        let tier2 = Math.max(0, Math.min(salary, UEL) - LEL);

        return (tier1 * RATE) + (tier2 * RATE);
    }
    let NSSF = calculate_NSSF(gross);
    document.getElementById("NSSF").innerHTML = NSSF.toFixed(2);

    // 3. NHIF (Band system)
    function calculate_NHIF(salary) {
        if (salary <= 5999) return 150;
        if (salary <= 7999) return 300;
        if (salary <= 11999) return 400;
        if (salary <= 14999) return 500;
        if (salary <= 19999) return 600;
        if (salary <= 24999) return 750;
        if (salary <= 29999) return 850;
        if (salary <= 34999) return 900;
        if (salary <= 39999) return 950;
        if (salary <= 44999) return 1000;
        if (salary <= 49999) return 1100;
        if (salary <= 59999) return 1200;
        if (salary <= 69999) return 1300;
        if (salary <= 79999) return 1400;
        if (salary <= 89999) return 1500;
        if (salary <= 99999) return 1600;
        return 1700;
    }
    let NHIF = calculate_NHIF(gross);
    document.getElementById("NHIF").innerHTML = NHIF.toFixed(2);

    // 4. NDHF (Housing Levy – 1.5% employee share)
    function calculate_NDHF(salary) {
        return salary * 0.015;
    }
    let NDHF = calculate_NDHF(gross);
    document.getElementById("NDHF").innerHTML = NDHF.toFixed(2);

    // 5. Taxable Income (Gross - NSSF)
    function calculate_taxable_income(gross, NSSF) {
        return gross - NSSF;
    }
    let taxable_income = calculate_taxable_income(gross, NSSF);
    document.getElementById("taxable_income").innerHTML = taxable_income.toFixed(2);

    // 6. PAYE Tax (KRA Bands)
    function calculate_PAYE(income) {
        let tax = 0;
        if (income <= 24000) {
            tax = income * 0.10;
        } else if (income <= 32333) {
            tax = (24000 * 0.10) + ((income - 24000) * 0.25);
        } else if (income <= 500000) {
            tax = (24000 * 0.10) + (8333 * 0.25) + ((income - 32333) * 0.30);
        } else {
            tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((income - 500000) * 0.35);
        }
        return tax;
    }
    let PAYE = calculate_PAYE(taxable_income);

    // 7. Net Pay (Gross - NSSF - NHIF - NDHF - PAYE)
    function calculate_net_pay(gross, NSSF, NHIF, NDHF, PAYE) {
        return gross - (NSSF + NHIF + NDHF + PAYE);
    }
    let net_pay = calculate_net_pay(gross, NSSF, NHIF, NDHF, PAYE);
    document.getElementById("net_pay").innerHTML = net_pay.toFixed(2);
});
