
const projectsList = [
    {
        name: "The Chamber",
        year: "2019",
        description: "The Chamber is a procedurally generated dungeon crawler with pathfinding enemies, over 1000 hand drawn sprites and over 100 unique items. Each level of the infinitly sprawling dungeon has a procedurally generated floor plan: each with its own random layout, connections, and aesthetic. Enemies, friendly NPCs, and chests full of useful loot can randomly spawn. Beating enemies and exploring the dungeon help level the player up, which allows them to increase their stats using the skill tree. These stat increasements can aid the player in beating the boss that resides at the end of each floor.",
        tags: ["python", "pathfinding", "games", "favourites"],
        image: "chamber",
    },
    {
        name: "Robot Maze",
        year: "2020",
        description: "I created a pathfinding controller to guide a robot through a randomly generated maze. This project was written in java and implemented pathfinding algorithms such as djikstra and the A* algorithm. ",
        tags: ["java", "pathfinding"],
        image: "robot-maze",

    },
    {
        name: "Ncurses Text Editor",
        year: "2020",
        description: "I created a text editor written in C using the ncurses library in order to deliver a text-user-interface to allow the user to navigate through menus. I added the functionality to scroll, manipulate files and copy and paste within files.",
        tags: ["c"],
        image: "ncurses",
    },
    {
        name: "Large Arithmetic Collider",
        year: "2021",
        description: "The Large Arithmetic Collider is a complex puzzle that involved rotating, transposing and manipulating lists in haskell. I wrote an artificial intelligence player that considers the different decisions it should make in order to solve the puzzle as efficiently as possible.",
        tags: ["haskell", "functional", "ai"],
        image: "ldc",

    },
    {
        name: "How should society adapt to the autonomy of labour?",
        year: "2021",
        description: "An essay contemplating the future of automation in the workplace and possible reactions society might take.",
        tags: ["essay"],
        image: "essay",
    },
    {
        name: "Investigating security vulnerabilities in Linux",
        year: "2021",
        description: "An investigation into linux security, where I identified possible security errors in a linux filesystem and webserver.",
        tags: ["linux"],
        image: "security-linux",
    },
    {
        name: "SYTES: A task managing web app",
        year: "2021",
        description: "SYTES is a task managing application, where users can create and log into accounts and create their own 'syte' which contains a number of tasks the user has created. Users can invite other people to their 'syte', sort their tasks, and send email notifications.",
        tags: ["html", "css", "javascript", "sql", "php", "web-dev"],
        image: "sytes",
    },
    {
        name: "Scratch Clone",
        year: "2021",
        description: "Scratch is a high-level visual programming langauge that uses draggable blocks to form procedures. Using Haskell I wrote an interpreter to read the instructions from the draggable blocks. Users of the program can assemble a simple program by dragging blocks to perform arithmetic on values stored in the memory of the program.",
        tags: ["haskell", "functional", "favourites"],
        image: "scratch-clone",

    },
    {
        name: "WAFFLES: A data structure project",
        year: "2021",
        description: "A project that emphasised the application of data structure and algorithms content I had learnt at University. The backend for a restaurant review website I wrote utilised AVL trees, binary searches and hashmaps to efficiently store and locate data for the system.",
        tags: ["java"],
        image: "waffles",

    },
    {
        name: "Personal Website 1.0",
        year: "2021",
        description: "The first iteration of my personal website. I wrote this first iteraton in plain html, css and javascript.",
        tags: ["html", "css", "javascript", "web-dev"],
        image: "old-website",

    },
    {
        name: "Warwick Labour Website Redesign",
        year: "2021",
        description: "I created a new website for a society at my university. The previous design was created in wordpress and was in much need of a redesign. Using react and typescript I created a flat, modern, simple redesign for the society.",
        tags: ["typescript", "react", "web-dev"],
        image: "warwick-labour-website",

    },
    {
        name: "Multithreaded packet sniffer",
        year: "2021",
        description: "A multithreaded packet sniffer that applies my packet structure knowledge and threading methods to produce a basic intrusion detection system. The program sniffs packets and informs the user if it detects ARP cache poisoning, SYN flooding or a blacklisted URL.",
        tags: ["c", "favourites"],
        image: "../images/projects/robot-maze.png",

    },
    {
        name: "SQL Gig Scheduler",
        year: "2021",
        description: "In this project I was tasked to write the SQl queries required for a music production company to book acts for an upcoming festival. This involved designing a system and displaying the appropriate data required to schedule, remove and get information about gigs.",
        tags: ["postgresql", "sql", "java"],
        image: "../images/projects/robot-maze.png",

    },
    {
        name: "Ursina Elements",
        year: "2022",
        description: "A simple minecraft clone written in python. The player may move, place and destroy blocks, and combine items in their inventory (inspired by the main mechanic in little alchemy) to unlock new building materials. ",
        tags: ["python", "games"],
        image: "ursina-elements",

    },
    {
        name: "GO Tools",
        year: "2022",
        description: "An app built for a niche board game called GO. The app allows the user to quickly convert between the different currencies, and calculate the cost of journeys between cities easily without having to consult the paper guide.",
        tags: ["swift", "app-dev"],
        image: "go-tools",

    },
    {
        name: "Show Must Go On",
        year: "2022",
        description: "Using artificial intelligence concepts and techniques, such as backtracking and simulated annealing, I created the methods required to create valid timetables satisfying constraints that would allow for valid matching of comedians to demographics that they would appeal to.",
        tags: ["python", "ai"],
        image: "ai-timetable",

    },
    {
        name: "Hurdle",
        year: "2022",
        description: "A haskell implementation of the hit game Wordle. The player must guess a word, and each letter will be highlighted green if it is in the correct place, amber if it exists in the word but incorectly placed, or grey if not present at all.",
        tags: ["haskell", "functional"],
        image: "hurdle",

    },
    {
        name: "Personal Website 2.0",
        year: "2022",
        description: "The second iteration of my personal website. This was my first project written using react and typescript, and although there are similiarities between it and the website you are currently visiting, I have since improved my React skills susbtantially.",
        tags: ["typescript", "react", "web-dev"],
        image: "website2",

    },
    {
        name: "Mentor Connect",
        year: "2022",
        description: "Mentor Connect is a web application that matches mentees to mentors based on heuristics obtained through machine learning. This project was undertaken as part of a group for Deutsche Bank, and allowed me to implement complex methods in django, to be deployed for the front end.",
        tags: ["typescript", "react", "web-dev", "python", "django", "postgresql", "sql"],
        image: "mentor-connect",

    },
    {
        name: "Tautology Checker",
        year: "2022",
        description: "I wrote a program to check whether logical statements are tautologies or not, using prolog. The program works by apply resolution rules and backtracking ",
        tags: ["prolog"],
        image: "resolution",

    },
    {
        name: "Writing a Parser",
        year: "2022",
        description: "Using javacc, I wrote a parser for a Programming Language of the Moment. The parser has protected keywords, rules for matching brackets and a grammar that the language should follow. This project allowed me to apply theory I have enjoyed learning in my degree in a practical way.",
        tags: ["java", "parser", "javacc"],
        image: "parser",

    },
    {
        name: "Simple Rust DFA Program",
        year: "2022",
        description: "An alternative approach to regex checker, written in rust. The problem is hard difficulty and this implementation is faster than 100% rust solutions. Meant to be a more novel implementation of the regex checker.",
        tags: ["rust"],
        image: "dfa",

    },

]
export default projectsList;