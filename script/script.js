console.log('JS OK')


// Get DOM element
const personalInformation = document.getElementById('personal-information');



// Create Array with personal information
const teamInformation = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]


// Cicle to create element to insert information into DOM

let elementInformation = ''

for (let i = 0; i < teamInformation.length; i++) {
    // Write in console
    console.log(teamInformation[i].name, teamInformation[i].role, teamInformation[i].photo)

    // Insert into DOM
    
    elementInformation += 
    `
    <p>Name: ${teamInformation[i].name}</p>
    <p>Role: ${teamInformation[i].role}</p>
    <img src="img/${teamInformation[i].photo}"> 
    `
}

personalInformation.innerHTML = elementInformation

