const teamGames = (data.teamGames == undefined) ? [] : data.teamGames;
const personalProjects = (data.personalProjects == undefined) ? [] : data.personalProjects;


if(teamGames.length > 0)
{
    document.getElementById("section-work").innerHTML = `

        <div class="container-fluid">
            <div class="d-flex justify-content-center fh5co-heading-white">
                <h2>Projects I've worked on</h2>
            </div>
            <div class="container-fluid">
                <div class="row">
                    ${
                        teamGames.map(function (project, index) {
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
                                        ${(project.download == undefined) ? "" : '<button class="column" onclick="location.href=\'' + project.download + '\'" title="'+ project.download + '"> Download </button>'}
                                        ${(project.source == undefined) ? "" : '<button class="column" onclick="location.href=\'' + project.source + '\'" title="'+ project.source + '"> Source </button> '}
                                        <button class="column" onclick="moreInfo(this, ${index})"> More info </button>

                                    </div>
                                </div>
                            </div>
                            `
                    }).join(' ')
                }
                </div>
            </div>
        </div>
    `
}

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