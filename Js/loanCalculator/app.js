document.querySelector('#loan-form').addEventListener('submit', function(e){
	// Hide Results
	document.querySelector('#results').style.display = 'none';
	// Show loader as soon as submitted
	document.querySelector('#loading').style.display = 'block';
	setTimeout(calculateResults, 2000);
	e.preventDefault();
});

function calculateResults(){
	console.log('calculating. . . ');
	const loanAmount = document.querySelector('#amount');
	const interest = document.querySelector('#interest');
	const yearsToRepay = document.querySelector('#years');

	const monthlyPayment = document.querySelector('#monthly-payment');
	const totalPayment = document.querySelector('#total-payment');
	const totalInterest = document.querySelector('#total-interest');

	const PV = parseFloat(loanAmount.value); //pv = principal PV is the loan amount
	const i = interest.value/100/12; //i is the interest rate per month in decimal form (interest rate percentage divided by 12
	const n = yearsToRepay.value * 12; //n is the number of months (term of the loan in months)

	// Finding monthly payment PMT = (PV * i * pow(1+i, n)) / pow(1+i, n)-1
	const x = Math.pow(1+i, n);
	const PMT = (PV * i * x) / (x-1);//PMT is the monthly payment i.e. EMI

// Once PMT OR EMI is calculated, WE ensure it is Finite Number i.e. validation
	if(isFinite(PMT)){
		monthlyPayment.value = PMT.toFixed(2);
		totalPayment.value = (PMT * n).toFixed(2);
		// totalInterest.value = ((PMT * n) - PV).toFixed(2);
		totalInterest.value = ((totalPayment.value) - PV).toFixed(2);
		document.querySelector('#results').style.display = 'block';
		document.querySelector('#loading').style.display = 'none';

	} else {
		// console.log('Please provide valid data');
		showError('Please provide valid data');
	}
	// e.preventDefault();
}

function showError(error){
	document.querySelector('#results').style.display = 'none';
	document.querySelector('#loading').style.display = 'none';
	const errorDiv = document.createElement('div');
	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));

	// Insert Error Div before heading
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	card.insertBefore(errorDiv, heading);

	window.setTimeout(clearError, 3000);
}

function clearError(){
	document.querySelector('.alert').remove();
}