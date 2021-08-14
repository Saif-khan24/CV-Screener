console.log("CV Project screener");
const data = [
    {
        name: 'Nitesh Kumar',
        age: 35,
        city: 'Hyderabad',
        language: 'C/Cpp/Java/JS/Python/Go',
        framework: 'React/Angular/Vue',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    
    {
        name: 'Siddharth Rajput',
        age: 38,
        city: 'Meerut',
        language: 'Go',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },

    {
        name: 'Gaurav Mohore',
        age: 54,
        city: 'Bhopal',
        language: 'JS',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/men/19.jpg'
    },
    
    {
        name: 'Sameer Khan',
        age: 19,
        city: 'Ratlam',
        language: 'Cpp',
        framework: 'Rails',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    
    {
        name: 'Ayush Sahu',
        age: 42,
        city: 'Allahabad',
        language: 'Go/Swift',
        framework: 'Rails',
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    
    {
        name: 'Fardeen Mirza',
        age: 22,
        city: 'Gurgaon',
        language: 'Swift',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        name: 'Shahnawaz Sheikh',
        age: 34,
        city: 'Raipur',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },

    {
        name: 'Mohd Saif Khan',
        age: 29,
        city: 'Noida',
        language: 'Java',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },

    {
        name: 'Salman Khan',
        age: 19,
        city: 'Faridabad',
        language: 'C',
        framework: 'love',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    
    {
        name: 'Atul Parmar',
        age: 19,
        city: 'Bangalore',
        language: 'C#',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    
    {
        name: 'Anuj Yadav',
        age: 14,
        city: 'Mumbai',
        language: 'Cpp',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    
    {
        name: 'Talaque Ansari',
        age: 11,
        city: 'Ajmer',
        language: 'Swift',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/17.jpg'
    },

    {
        name: 'Mohit Patil',
        age: 24,
        city: 'Ahmedabad',
        language: 'C',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },

    {
        name: 'Siddhant Patwa',
        age: 25,
        city: 'Ujjain',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },

    {
        name: 'Araish Khan',
        age: 37,
        city: 'Chennai',
        language: 'C',
        framework: 'Ruby on Rails',
        image: 'https://randomuser.me/api/portraits/women/37.jpg'
    },

    {
        name: 'Varsha',
        age: 17,
        city: 'Delhi',
        language: 'C',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        name: 'Gayatri Dhule',
        age: 23,
        city: 'Raipur',
        language: 'Java',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/41.jpg'
    },

    {
        name: 'Ashi Jain',
        age: 28,
        city: 'Ajmer',
        language: 'Swift',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/31.jpg'
    },

    {
        name: 'Maaaaaaaaaaaaansi',
        age: 20,
        city: 'Chota Nagpur',
        language: 'Go',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/21.jpg'
    },

    {
        name: 'Amisha',
        age: 23,
        city: 'Satna',
        language: 'Paitings',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    
    {
        name: 'Nigita Tomar',
        age: 24,
        city: 'Goa',
        language: 'C',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },

    {
        name: 'Neha Mandre',
        age: 13,
        city: 'Nashik',
        language: 'Java',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/25.jpg'
    },


    {
        name: 'Muskan Kuswah',
        age: 32,
        city: 'Gurgaon',
        language: 'Python',
        framework: 'Ruby on Rails',
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },

    {
        name: 'Ashvi Khan',
        age: 34,
        city: 'Ajmer',
        language: 'Prayagraj',
        framework: 'Vue',
        image: 'https://randomuser.me/api/portraits/women/35.jpg'
    },

    
    {
        name: 'Jeet Mishra',
        age: 33,
        city: 'Varanasi',
        language: 'Cpp',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    },

    {
        name: 'Adarsh Mulik',
        age: 13,
        city: 'Kanpur',
        language: 'Python',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/43.jpg'
    },

    {
        name: 'Navneet Bamnia',
        age: 53,
        city: 'Mathura',
        language: 'Cpp',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/29.jpg'
    },
]

//cv Iterator
function cvIterator(profiles){
    let nextIdx = 0;
    return {
        next : function(){
            return nextIdx < profiles.length ? 
            {value: profiles[nextIdx++], done: false}:
            {done: true} 
        }
    };
}
const candidates = cvIterator(data);
nextCV();

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener("click", nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`
        profile.innerHTML = 
        `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
        </ul>`
    }
    else
    {
        alert("End of Candidate Applications");
        window.location.reload();
    }
}