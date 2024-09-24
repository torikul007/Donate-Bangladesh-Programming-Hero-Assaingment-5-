//Donation at Noakhali
document.getElementById('noakhali-btn').addEventListener('click', function () {

    const inputValueString = inputValue('noakhali-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('noakhali-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }
    if (donateAmount > myBalance) {
        alert('You don\'t have sufficient balance, "Please Deposit"')
        return
    }

    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('noakhali-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('noakhali-amount').value = '';

    // updating history 
    const newHistory = document.createElement('div');
    newHistory.innerHTML =
        `
            <div class="border p-4 sm:p-6 md:p-8  rounded-2xl mb-4">
            <h4 class="text-2xl font-bold">${donateAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
            <p>Date: ${new Date()}</p>
        </div>
`
    // document.getElementById('history').append(newHistory)
    idSelector('history').append(newHistory)  //for reusable function

    //showing confirmation modal
    my_modal_5.showModal()
})

//Donation at Feni
document.getElementById('feni-btn').addEventListener('click', function () {

    const inputValueString = inputValue('feni-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('feni-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }
    if (donateAmount > myBalance) {
        alert('You don\'t have sufficient balance, "Please Deposit"')
        return
    }


    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('feni-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('feni-amount').value = '';

    // updating history 
    const newHistory = document.createElement('div');
    newHistory.innerHTML =
        `
            <div class="border p-4 sm:p-6 md:p-8 rounded-2xl mb-6">
            <h4 class="text-2xl font-bold mb-4">${donateAmount} Taka is Donated for House building at Feni, Bangladesh</h4>
            <p>Date: ${new Date()}</p>
        </div>
`
    document.getElementById('history').append(newHistory)

    //showing confirmation modal
    my_modal_5.showModal()
})

//Donation at Quota Movement
document.getElementById('quota-btn').addEventListener('click', function () {

    const inputValueString = inputValue('quota-amount');
    const myBalance = parseFloat(innerTextValue('my-balance'));
    const noakhaliBalance = parseFloat(innerTextValue('quota-balance'))
    const donateAmount = parseFloat(inputValueString)

    //input validation
    if (isNaN(inputValueString) || inputValueString === "" || donateAmount <= 0) {
        alert('Invalid Donation Amount')
        return
    }
    if (donateAmount > myBalance) {
        alert('You don\'t have sufficient balance, "Please Deposit"')
        return
    }


    document.getElementById('my-balance').innerText = myBalance - donateAmount;
    document.getElementById('quota-balance').innerText = noakhaliBalance + donateAmount;
    document.getElementById('quota-amount').value = '';

    // updating history 
    const newHistory = document.createElement('div');
    newHistory.innerHTML =
        `
            <div class="border p-4 sm:p-6 md:p-8 rounded-2xl mb-4">
            <h4 class="text-2xl font-bold">${donateAmount} Taka is Donated for Quota Movement Injured people in Bangladesh</h4>
            <p>Date: ${new Date()}</p>
        </div>
`
    document.getElementById('history').append(newHistory)

    //showing confirmation modal
    my_modal_5.showModal()
})


//Navigating to History 
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donation').classList.add('hidden')

    document.getElementById('history-btn').classList.add('bg-primary')
    document.getElementById('donation-btn').classList.remove('bg-primary')

})

//Navigating to Donation 
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history').classList.add('hidden')
    document.getElementById('donation').classList.remove('hidden')

    document.getElementById('history-btn').classList.remove('bg-primary')
    document.getElementById('donation-btn').classList.add('bg-primary')

})

