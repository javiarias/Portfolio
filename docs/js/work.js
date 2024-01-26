const teamGames = [
    {
        projectName: "District Dance Battle",
        projectType: "SDL (C++)",
        imageSrc: "images/games/ddb.png",
        download: "https://freestylers-studio.itch.io/district-dance-battle-sdl",
        source: "https://github.com/freesstylers/District-Dance-Battle",
        description: "A rhythm game inspired by Dance Dance Revolution, but with a twist!",
        extra: "Winner of the <b> Best Game Award </b> at FIMP 2019"
    },
    {
        projectName: "Mauriçius Nativitatem",
        projectType: "Unity (C#)",
        imageSrc: "images/games/mauricius.png",
        download: "https://freestylers-studio.itch.io/mauricius-nativitatem",
        source: "https://github.com/freesstylers/JamOn",
        description: "A small rhythm game inspired by the Patapon series",
        extra: "Won <b> second place </b> at the 2021 JamOn game jam"
    },
    {
        projectName: "Chromaturgia",
        projectType: "Unity (C#)",
        imageSrc: "images/games/chromaturgia.png",
        download: "https://javiarias.github.io/Chromaturgia/",
        source: "https://github.com/javiarias/Chromaturgia",
        description: "A short puzzle game based around shooting color pellets"
    },
    {
        projectName: "TeFeGe",
        projectType: "<u>Game</u>: Unity (C#) <br> <u>Servers</u>: Mirror (C#), Express (JS)",
        imageSrc: "images/games/tefege.png",
        download: "https://tefege.itch.io/tefege",
        source: "https://github.com/HoracioStudios/TFG",
        description: "An online multiplayer twin-stick shooter, with a functioning matchmaking system. <b>Currently offline</b>"
    },
    {
        projectName: "Motor Casa Paco",
        projectType: 'Custom Game Engine (C++)',
        imageSrc: "images/games/casapaco.png",
        source: "https://github.com/freesstylers/Untitled-Motor",
        description: "A custom 3D game engine made using Ogre3D, FMOD, Bullet Physics and SDL"
    },
    {
        projectName: "Vaya Canicastañazos",
        projectType: '"Motor Casa Paco" (C++)',
        imageSrc: "images/games/canicas.png",
        download: "https://freestylers-studio.itch.io/vaya-canicastanhazos",
        source: "https://github.com/freesstylers/Vaya-Canicastanyazos",
        description: "A platformer inspired by the Monkey Ball series"
    },
    {
        projectName: "A Toda Pastilla",
        projectType: '"Motor Casa Paco" (C++)',
        imageSrc: "images/games/pastilla.png",
        download: "https://freestylers-studio.itch.io/a-toda-pastilla",
        source: "https://github.com/freesstylers/A-Toda-Pastilla",
        description: "An infinite bullet hell game"
    }
];

const workExperience = [
    {
        projectName: "Infinigon Games",
        role: 'Main UI Programmer',
        imageSrc: "https://infinigongames.com/wp-content/uploads/2023/09/InfinigonOnlyLogo512.png",
        website: "https://cloudimperiumgames.com",
        length: "2022 - 2024",
        description: "Project under NDA (release: aprox. June 2024)",
        extra: "A minigame-based game aimed at kids based on a popular animated kids TV show, to release on PC and consoles."
    },    
    
    {
        projectName: "Cloud Imperium",
        role: 'UI Programmer I',
        imageSrc: "https://static.wikia.nocookie.net/starcitizen/images/9/9b/Cloud_Imperium_Games_Logo.jpg",
        website: "https://cloudimperiumgames.com",
        length: "2021 - 2022",
        description: "UI programming for Star Citizen and Squadron 42",
        extra: "Focused on porting their MobiGlas (menu hub) to a 3D projection, and updating their StarMap (interactive galaxy map)"
    },
];

const personalProjects = [
    
];

document.getElementById("section-work").innerHTML = `
    <div class="container-fluid">
        <div class="d-flex justify-content-center fh5co-heading-white">
            <h2>Companies I've worked with</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                ${workExperience.map(function (project) {
                return `
                    <div class="col-lg-2 col-md-3 col-6" style="margin-bottom:10px;">
                        <div class="card">
                            
                            <img src="${project.imageSrc}" class="card-img-top" style="padding:5%;"/>

                            <div class="card-body">
                                <h4 class="card-title coral">${project.projectName} </h4>
                                <h6 class="card-text" style="color:black;">${project.length} </h5>
                                <h5 class="card-text" style="color:black;">${project.role} </h5>
                                <h5 class="card-text" style="color:black;">${project.description} </h5>
                                <h5 class="card-text" style="color:black;">${(project.extra == undefined) ? "" : project.extra} </h5>
                            </div>
                            <div class="card-footer">
                                ${(project.download == undefined) ? "" : '<button class="column"><a href="' + project.download + '" target="_blank"> Download </a> </button>'}
                                ${(project.source == undefined) ? "" : '<button class="column"><a href="' + project.source + '" target="_blank"> Source </a> </button>'}
                                ${(project.website == undefined) ? "" : '<button class="column"><a href="' + project.website + '" target="_blank"> Website </a> </button>'}
                            </div>
                        </div>
                    </div>
                    `
            }).join(' ')}
            </div>
        </div>
    </div>
`

document.getElementById("section-personal").innerHTML = `
    <div class="container-fluid">
        <div class="d-flex justify-content-center fh5co-heading-white">
            <h2>Games/Projects I've worked on</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                ${teamGames.map(function (project) {
                return `
                    <div class="col-lg-2 col-md-3 col-6" style="margin-bottom:10px;">
                        <div class="card">
                            
                            <img src="${project.imageSrc}" class="card-img-top" style="padding:5%;"/>

                            <div class="card-body">
                                <h4 class="card-title coral">${project.projectName} </h4>
                                <h5 class="card-text" style="color:black;">${project.projectType} </h5>
                                <h5 class="card-text" style="color:black;">${project.description} </h5>
                                <h5 class="card-text" style="color:black;">${(project.extra == undefined) ? "" : project.extra} </h5>
                            </div>
                            <div class="card-footer">
                                ${(project.download == undefined) ? "" : '<button class="column"><a href="' + project.download + '" target="_blank"> Download </a> </button>'}
                                ${(project.source == undefined) ? "" : '<button class="column"><a href="' + project.source + '" target="_blank"> Source </a> </button>'}
                            </div>
                        </div>
                    </div>
                    `
            }).join(' ')}
            </div>
        </div>
    </div>
`

if(personalProjects.length > 0)
{

    document.getElementById("section-personal").innerHTML = `

    <div id="fh5co-work" class="fh5co-bg-dark">
            <div class="container-fluid">
                <div class="row animate-box">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading-white">
                        <h2>Personal Projects</h2>
                    </div>
                </div>
                <div class="row work-cards">
                    ${personalProjects.map(function (project) {
                        return `
                        <div class="col-md-3 col-padding animate-box">
                        <div class="cards">
                        <figure class="card">
                        <img src="${project.imageSrc}" />
                        
                        <figcaption>${project.projectName} 
                        <p>${project.projectType} </p>
                        <p>${project.description} </p>
                        <a target="_blank" href="${project.projectLink}">
                        <button><span>Play</span></button>
                        </a>
                        </figcaption>
                        </figure>
                        </div>
                        </div>
                        `
    }).join(' ')}
                    
                </div>
                <div class="row animate-box">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <p> <br> <br>
                            <a target="_blank" href="https://jd-christo.itch.io/" class="btn btn-default btn-lg">My Itch.io</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
}