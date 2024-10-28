function calculateMaxProfit() {
    const timeUnits = parseInt(document.getElementById('timeUnits').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (isNaN(timeUnits) || timeUnits < 1) {
        resultDiv.innerHTML = '<p>Please enter a valid number of time units.</p>';
        return;
    }

    // Define earnings and build time for each property
    const earnings = {
        Theatre: 1500,
        Pub: 1000,
        CommercialPark: 3000
    };

    const timeToBuild = {
        Theatre: 5,
        Pub: 4,
        CommercialPark: 10
    };

    let maxEarning = 0;
    let solutions = [];

    // Iterate over all possible combinations of properties
    for (let t = 0; t * timeToBuild.Theatre <= timeUnits; t++) {
        for (let p = 0; p * timeToBuild.Pub <= timeUnits; p++) {
            let remainingTime = timeUnits - (t * timeToBuild.Theatre + p * timeToBuild.Pub);
            let c = Math.floor(remainingTime / timeToBuild.CommercialPark);

            // Calculate total earnings for this combination
            const totalEarning = (t * earnings.Theatre) + (p * earnings.Pub) + (c * earnings.CommercialPark);

            // Check if we have found a new maximum earning
            if (totalEarning > maxEarning) {
                maxEarning = totalEarning;
                solutions = [{ T: t, P: p, C: c }]; // Start a new solutions list
            } else if (totalEarning === maxEarning && totalEarning > 0) {
                solutions.push({ T: t, P: p, C: c }); // Add to solutions
            }
        }
    }

    // Display Results
    resultDiv.innerHTML = `<h3>Maximum Earnings: $${maxEarning}</h3>`;
    if (solutions.length === 0) {
        resultDiv.innerHTML += '<p>No valid combinations found.</p>';
    } else {
        solutions.forEach((solution, index) => {
            const solutionDiv = document.createElement('div');
            solutionDiv.className = 'solution';
            solutionDiv.innerHTML = `Solution ${index + 1}: T: ${solution.T}, P: ${solution.P}, C: ${solution.C}`;
            resultDiv.appendChild(solutionDiv);
        });
    }
}
