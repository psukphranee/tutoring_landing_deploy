const data = {
    'About' : {
        name : 'Panya S',
        description : "I am a graduate student in Mathematics at San Francisco State University, where I also teach Pre-Calculus and a Calculus I Lab. In addition to my work at the university, I am a Math Teacher at C2 Education, where I help students prepare for exams such as the ACT, SAT, and AP Calculus AB/BC. With experience working with students from 1st grade to college freshman, both in private and public schools across California, I have helped many students achieve their academic goals and go on to top universities. My passion for teaching and helping students succeed drives me to continuously improve my skills and knowledge."
    },
    'Location' : {
        'descriptions' :
        [
        {title : 'Homework Help',
            description : 'Homework help in math tutoring involves providing support and guidance to students as they work on math assignments and homework outside of formal tutoring sessions. This can be done in one-on-one or group sessions, or through online resources and tools. The goal is to improve students understanding and skills in math.'
        },
        {title : 'Test Preparation',    
            description : 'Standardized test preparation including ACT, SAT, AP Calculus AB/BC. School exams.'
        },
        {title : 'Supplementary Instruction',
            description : 'Practice problems to reinforce skills.'
        },
        {
            title: 'Private Lessons',
            description: 'Algebra 2 and up. Use standard college textbooks. Cover every section in depth. Varying pace.'
        }]
    }
    ,
    'Subjects' : '',
    // 'Services' : {
    //     'descriptions' :
    //     [
    //     {title : 'Homework Help',
    //         description : 'Homework help in math tutoring involves providing support and guidance to students as they work on math assignments and homework outside of formal tutoring sessions. This can be done in one-on-one or group sessions, or through online resources and tools. The goal is to improve students understanding and skills in math.'
    //     },
    //     {title : 'Test Preparation',    
    //         description : 'Standardized test preparation including ACT, SAT, AP Calculus AB/BC. School exams.'
    //     },
    //     {title : 'Supplementary Instruction',
    //         description : 'Practice problems to reinforce skills.'
    //     },
    //     {
    //         title: 'Private Lessons',
    //         description: 'Algebra 2 and up. Use standard college textbooks. Cover every section in depth. Varying pace.'
    //     }]
    // },
    'Pricing' : [
        { price : '$160', description : 'One 2-hour session.'},
        { price : '$740', description : '5 sessions. 2 hours per session'},
        { price : '$1360', description : '10 sessions. 2 hours per session'}
    ],
    'Contact' : 'contact'
}

const motives = [
    {
        name: 'Confidence',
        description: "Confidence is key to unlocking your math potential. You'll learn to approach math problems with a positive mindset and the ability to recover from inevitable failures and roadblocks, because it's not about falling but about getting up. With increased confidence, you'll be able to tackle any math challenge that comes your way.",
        icon: "GlobeAltIcon",
    },
    {
        name: 'Mental Math',
        description: "Develop the abillity to solve complex math problems in your head. We use a pencil and paper approach to increase your skill level and speed, while also incorporating proven mental techniques that have been developed through research in math education and years of experience. We believe that the traditional pencil and paper approach to mathematics is irreplaceable and cannot be replaced by technology", 
        icon: "ScaleIcon",
    },
    {
        name: 'Intuition',
        description: "Unlock your potential to understand the underlying concepts and connections in mathematical statements. We will help you develop the intuition to see beyond the dense notation of equations and understand their underlying meaning. Equations are the foundation of STEM and contain information about the behavior of the world around us. They tell us what is possible and what is not, and allow us to make predictions from what we know. With our help, you will be able to unlock the hidden insights and understand the true power of math.",
        icon: "BoltIcon",
    },
    {
        name: 'Art',
        description: "Mathematics is not just a collection of random symbols, but a perspective on the universe and our existence. It is a way of understanding the world around us and the patterns that govern it. See math as the beautiful and elegant tool that it is, invented to deal with the realities of the universe. The discoveries of the universe lead to math and math leads to more discoveries, creating a feedback loop of understanding and exploration. Unlock the artistic side of math and see the beauty in its complexity.",
        icon: "EnvelopeIcon",
    },
]

export {data, motives};