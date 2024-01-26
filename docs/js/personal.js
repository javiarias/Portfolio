const teamGames = [
    {
        projectName: "District Dance Battle",
        projectType: "SDL (C++)",
        imageSrc: "images/games/ddb.png",
        role: "Gameplay Programmer, UI Programmer",
        download: "https://freestylers-studio.itch.io/district-dance-battle-sdl",
        source: "https://github.com/freesstylers/District-Dance-Battle",
        description: "A rhythm game inspired by Dance Dance Revolution, but with a twist!",
        extra: "Winner of the <b> Best Game Award </b> at FIMP 2019"
    },
    {
        projectName: "Una Voz En Cancedo",
        projectType: "Unity (C#)",
        imageSrc: "https://img.itch.zone/aW1nLzEzNTEyMDQ5LnBuZw==/315x250%23c/1HrB%2F5.png",
        role: "UI Designer / Programmer",
        download: "https://freestylers-studio.itch.io/una-voz-en-cancedo",
        source: "https://github.com/freesstylers/IndieSpainJam2023",
        description: "A short point and click story about surviving in a doomed town. Spanish only.",
    },
    {
        projectName: "Apruébame Esta",
        projectType: "Godot (GDScript)",
        imageSrc: "https://img.itch.zone/aW1nLzE0NTY0MDczLnBuZw==/original/p0DiGq.png",
        role: "UI Designer / Programmer",
        download: "https://freestylers-studio.itch.io/apruebame-esta",
        source: "https://github.com/freesstylers/GiftJam2324",
        description: "A short rhythm game inspired by Punch Out.",
    },
    {
        projectName: "Mauriçius Nativitatem",
        projectType: "Unity (C#)",
        imageSrc: "images/games/mauricius.png",
        role: "UI Designer / Programmer",
        download: "https://freestylers-studio.itch.io/mauricius-nativitatem",
        source: "https://github.com/freesstylers/JamOn",
        description: "A small rhythm game inspired by the Patapon series",
        extra: "Won <b> second place </b> at the 2021 JamOn game jam"
    },
    {
        projectName: "TeFeGe",
        projectType: "<u>Game</u>: Unity (C#) <br> <u>Servers</u>: Mirror (C#), Express (JS)",
        imageSrc: "images/games/tefege.png",
        role: "Gameplay / UI Programmer, Network Engineer",
        download: "https://tefege.itch.io/tefege",
        source: "https://github.com/HoracioStudios/TFG",
        description: "An online multiplayer twin-stick shooter, with a functioning matchmaking system. <b>Currently offline</b>"
    },
    {
        projectName: "Vaya Canicastañazos",
        projectType: 'Custom Game Engine (C++)',
        imageSrc: "images/games/canicas.png",
        role: "Gameplay Designer / Programmer, Level Designer",
        download: "https://freestylers-studio.itch.io/vaya-canicastanhazos",
        source: "https://github.com/freesstylers/Vaya-Canicastanyazos",
        description: "A platformer inspired by the Monkey Ball series"
    },
    {
        projectName: "A Toda Pastilla",
        projectType: 'Custom Game Engine (C++)',
        imageSrc: "images/games/pastilla.png",
        role: "UI Programmer",
        download: "https://freestylers-studio.itch.io/a-toda-pastilla",
        source: "https://github.com/freesstylers/A-Toda-Pastilla",
        description: "An infinite bullet hell game"
    },
    {
        projectName: "Chromaturgia",
        projectType: "Unity (C#)",
        imageSrc: "images/games/chromaturgia.png",
        role: "Gameplay Designer / Programmer",
        download: "https://javiarias.github.io/Chromaturgia/",
        source: "https://github.com/javiarias/Chromaturgia",
        description: "A short puzzle game based around shooting color pellets"
    },
];

const personalProjects = [
    
];

document.getElementById("section-personal").innerHTML = `
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="row">
                ${teamGames.map(function (project) {
                return `
                    <div class="col-lg-2 col-md-3 col-6" style="margin-bottom:10px;">
                        <div class="card">
                            
                            <img src="${project.imageSrc}" class="card-img" style="padding:5%;"/>

                            <div class="card-body">
                                <h4 class="card-title coral">${project.projectName} </h4>
                                <h5 class="card-text" style="color:black;">${project.role} </h5>
                                <h5 class="card-text" style="color:black;">${project.projectType} </h5>
                                <h6 class="card-text" style="color:black;">${project.description} </h6>
                                <h6 class="card-text" style="color:black;">${(project.extra == undefined) ? "" : project.extra} </h6>
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