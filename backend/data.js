// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2018 - 2021',
     institution: 'SMA NEGERI 1 PENGASIH',
     major: 'IPA' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' }
];
const projects = [ 
    { title: 'Submit Mounth Everst', image: '/src/assets/img/ROBLOX EVEREST.jpg',
    description: 'Menaklukan Gunung Tertinggi di Dunia', tech: ['Asoy'
], link: '#' },
    { title: 'COMING SOON', image: '/src/assets/img/g2.jpg',
    description: 'COMING SOON',}
];
module.exports = { educationHistory, skills, projects };