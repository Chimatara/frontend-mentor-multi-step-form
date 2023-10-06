const formPages = document.querySelectorAll('.form-input');
const nextButton = document.querySelectorAll('.next');
const prevButton = document.querySelectorAll('.prev');
const progress = document.querySelectorAll('.num')

// toggle
const toggleIconOn = document.querySelector('.toggle-on')
const toggleIconOff = document.querySelector('.toggle-off')
const monthlySub = document.querySelector('.monthly-subscription')
const yearlySub = document.querySelector('.yearly-subscription')

// subscription cards
const subscriptions = document.querySelectorAll('.arcade, .yearly')
const services = document.querySelectorAll('.online-services');



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

   function onlineServices(){
    services.forEach(service => {
       service.addEventListener('click', () => {
        service.classList.add('online-active')
        
       })
    })
   }
  onlineServices()





let currentActive = 1

nextButton.forEach(button => {
    button.addEventListener('click', () => {
        currentActive++
        updatePage()
        updateSteps()
    })
})
prevButton.forEach(button => {
    button.addEventListener('click', () => {
        currentActive--
        updatePage()
        updateSteps()
    })
})

function updatePage() {
    formPages.forEach(page => {
       if(page.classList.contains('active')){
        page.classList.remove('active')
       }
    })
    formPages[currentActive].classList.add('active')
}

function updateSteps() {
 progress.forEach((item, index)=> {
    console.log('clicked')
 })
   
}

function removeStep(){
    steps.forEach(step => {
        step.classList.remove('active')
    })
}