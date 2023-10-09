const formPages = document.querySelectorAll('.form-input');
const nextButton = document.querySelectorAll('.next');
const prevButton = document.querySelectorAll('.prev');
const progress = document.querySelectorAll('.num')
const steps = document.querySelectorAll('.steps')

// toggle
const toggleIconOn = document.querySelector('.toggle-on')
const toggleIconOff = document.querySelector('.toggle-off')
const selectedMonthlyToggle = document.querySelectorAll('.monthly-text')
const monthlySub = document.querySelector('.monthly-subscription')
const yearlySub = document.querySelector('.yearly-subscription')

// subscription cards
const subscriptions = document.querySelectorAll('.arcade, .yearly')
const services = document.querySelectorAll('.online-services');
const checked = document.querySelectorAll('.check')
var toggleBar = document.querySelector('.toggle-bar')


let currentActive = 0


document.addEventListener('DOMContentLoaded', function () {
 
    // toggleBar.addEventListener('click', function () {
    //     // Toggle the dim class on the monthly text elements
    //     selectedMonthlyToggle.forEach(function (element) {
    //       element.classList.toggle('dim');
    //     });
    //   });

    toggleIconOn.addEventListener('click', () => {
        toggleIconOn.style.display = 'none'
        toggleIconOff.classList.add('toggle-active')
        monthlySub.style.display = 'none'
        yearlySub.classList.add('yearly-subscription-active')
    })

    toggleIconOff.addEventListener('click', () => {
        toggleIconOn.style.display = 'block'
        toggleIconOff.classList.remove('toggle-active')
        monthlySub.style.display = 'flex'
        yearlySub.classList.remove('yearly-subscription-active')
    })

   function Addsubscription() {
    subscriptions.forEach(subscription => {
        subscription.addEventListener('click', () => {
            removeSubscription()
            subscription.classList.add('subscription-active')
        })
    })
   }
   Addsubscription()

   function removeSubscription() {
    subscriptions.forEach(subscription => {
        subscription.classList.remove('subscription-active')
    })
   }

 
function onlineServices() {
    services.forEach(service => {
        service.addEventListener('click', () => {
            isChecked(service); // Pass the service element to isChecked
            service.classList.toggle('online-active');
        });
    });
}

function isChecked(service) {
    const index = Array.from(services).indexOf(service);
    checked[index].classList.toggle('check-active');
}

onlineServices();
  
// page ends here


// buttons begin here
nextButton.forEach(button => {
    button.addEventListener('click', () => {
        if (currentActive < formPages.length - 1) {
            currentActive++;
            updatePage();
            updateSteps();
        }
    })
})
prevButton.forEach(button => {
    button.addEventListener('click', () => {
        if (currentActive > 0) {
            currentActive--;
            updatePage();
            updateSteps();
        }
    })
})

// update page begins here
function updatePage() {
    formPages.forEach(page => {
       if(page.classList.contains('active')){
        page.classList.remove('active')
       }
    })
    formPages[currentActive].classList.add('active')
}

function updateSteps() {
 progress.forEach((step, index)=> {

    step.addEventListener('click', () => {
        currentActive = index;
        updatePage();
        updateSteps();
    });
    if (index === currentActive) {
        step.classList.add('steps-active');
    } else {
        step.classList.remove('steps-active');
    }
    
 })  
}
updateSteps()




});