const teamGames = [
    {
        companyName: "Cloud Imperium",
        role: "UI Programmer I",
        imageSrc: "images/workplace/cig.png",
        //download: "https://freestylers-studio.itch.io/district-dance-battle-sdl",
        //source: "https://github.com/freesstylers/District-Dance-Battle",
        description: "Work on Star Citizen and Squadron 42",
        //extra: "Winner of the <b> Best Game Award </b> at FIMP 2019"
    }
];

const personalProjects = [
    
];

document.getElementById("section-work").innerHTML = `
    <div class="container-fluid">
        <div class="d-flex justify-content-center fh5co-heading-white">
            <h2>My work History</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                ${teamGames.map(function (project) {
                return `
                    <div class="col-lg-2 col-md-3 col-6" style="margin-bottom:10px;">
                        <div class="card">
                            
                            <img src="${project.imageSrc}" class="card-img-top" style="padding:5%;"/>

                            <div class="card-body">
                                <h4 class="card-title coral">${project.companyName} </h4>
                                <h5 class="card-text" style="color:black;">${project.role} </h5>
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
                        <p>${project.company} </p>
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