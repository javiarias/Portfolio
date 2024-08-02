const workExperience = [
    {
        name: "Project under NDA ",
        role: 'Main UI Programmer',
        company: 'Infinigon Games, Outright Games',
        length: "Jun 2024 - ???",
        description: `A platformer exploration game aimed at kids based on a popular animated kids TV show, to release on PC and consoles, developed for Outright Games. Currently working on implementing and refining the game's UI and UX, as well as handling its translation.`,
        list: [ `Worked in <b>C#</b> with <b>Unity</b>`, `Designed and implemented the UI according to the project owner's specifications.`, `Negotiating features keeping in mind deadlines and limitations of the engine / platform, as well as the artist's needs.`, `Optimizing resource management and UI creation as needed due to console and engine limitations.`, `Bug fixing and cleaning up prototyped code from earlier versions of the project.`, ],
        extra: "",
        videos: [ ],
        images: [ "https://pm1.aminoapps.com/7515/4877b37997b83f85f36e884d12522baefd5f444cr1-540-359v2_uhq.jpg" ],
        links: [ ],
    },
    {
        name: "Gigantosaurus: Dino Sports",
        role: 'Main UI Programmer / Designer, Generalist Programmer',
        company: 'Infinigon Games, Outright Games',
        length: "Dec 2022 - Jun 2024",
        description: `A minigame-based game aimed at kids based on a popular animated kids TV show, to release on PC and consoles, developed for Outright Games. Due to the scale of the team I handled all of the game's UI and UX, designing most of it with the aid of our main artist, while also taking on some more general tasks when it was necessary.`,
        list: [ `Worked in <b>C#</b> with <b>Unity</b>`, `Designed and implemented the UI according to the project owner's specifications.`, `Negotiating features keeping in mind deadlines and limitations of the engine / platform, as well as the artist's needs.`, `Optimizing resource management and UI creation as needed due to console and engine limitations.`, `Bug fixing and cleaning up prototyped code from earlier versions of the project.`, ],
        extra: "",
        videos: [ ],
        images: [ "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000062573/7a9ccfe45242f41d21a0aa7930ac3b405c6b171d0a9139360fb1f88d94467b39" ],
        links: [ ],
    },
    {
        name: "Star Citizen, Squadron 42",
        role: 'UI Programmer I',
        company: 'Cloud Imperium Games',
        length: "Dec 2021 - Nov 2022",
        description: `Star Citizen is Cloud Imperium Games' main project, a large scale space sim MMO, while Squadron 42 is a focused singleplayer FPS campaign sharing the same technology. I worked on implementing UI designs shared between both projects, which due to the nature of the game involved working with many new and innovative forms of UI rendering and presentation.`,
        list: [ `Worked in <b>C++</b> with an in-house engine based on <b>CryEngine</b>`, `Implemented a re-design of the MobiGlas, the player's menu hub, as a 3D projection on curved geometry.`, `Implemented both visual and interactive aspects of the StarMap, the game's interactive galaxy map, focusing on player navigation and information displays (orbit projections, name tags, placement of POI icons)`, ],
        extra: "",
        videos: [ "https://www.youtube.com/embed/BlGroDB1se4?si=h1rQqe7_7Ubo0yvV&amp;start=1949", ],
        images: [ "https://static-cdn.jtvnw.net/jtv_user_pictures/f0f34972-b61f-490a-8e0f-0bada3ff4cf6-profile_banner-480.jpeg", ],
        links: [ {name: "Website", link: "https://robertsspaceindustries.com"}, ],
    },
];

document.getElementById("section-work").innerHTML = `
        <div class="container-fluid">
                ${workExperience.map(function (project, index) {
                    var ret = "";

                        ret = `
                                    <div class="container">
                                        <div class="row">
                                            `

                        //media side

                        var media =                  `
                                                <div class="col-sm" style="padding:0 15px;">
                                                    <div class="row" style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:left">`
                    
                                                    if(project.images != undefined)
                                                    {
                                                        project.images.forEach(element => {
                                                            media += `<div> <img src="${element}" class="card-img"/> </div>`
                                                        });
                                                    }

                        media +=                 `</div>
                                                <div class="row" style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:left">`
                    
                                                if(project.videos != undefined)
                                                {
                                                    project.videos.forEach(element => {
                                                        media += `<div class="col-sm embed-container">
                                                        <iframe src="` + element + `" allowfullscreen></iframe>
                                                    </div>`
                                                    });
                                                }

                    media +=                 `</div>
                                            <div class="d-flex justify-content-center">`
                    
                                            if(project.links != undefined)
                                            {
                                                project.links.forEach(element => {
                                                    media += `
                                                                <button style="padding: 1.5%;"><a href="${element.link}"> ${element.name} </a> </button>`
                                                });
                                            }

                                            

                    //info side
                                            
                    media +=                 `</div>


                                                            
                                            </div>`
                                            
                                            
                    var info = `
                                            <div class="col-sm center" style="padding:0 15px;">
                                                            
                                                                

                                                <h3 class="coral" style="text-align:left;">${project.name} </h2>

                                                <h5 style="text-align:left;">${project.role} </h5>
                                                <h5 style="text-align:left;">${project.company} </h5>
                                                <h5 style="text-align:left;">${project.length}</h5>

                                                <p class="paragraph">${project.description}</p>

                                                <div class="paragraph"><ul><br>
                                                `
                                                
                        project.list.forEach(element => {
                            info += `<li>
                            ` + element + `
                        </li>`
                        });
                                                
                        info +=    
                                                `
                                                    </ul></div>
                                                            
                                            </div>

                                            `


                    if(index % 2 != 0)
                    {
                        ret += media + info;
                    }
                    else
                    {
                        ret += info + media;
                    }

                        ret +=         `
                                        </div>
                                    </div>
                                `;
                    if(index > 0)
                    {
                        ret = `<div>
                                    <div style="height: 20px; overflow: hidden; width: 100%;"></div>
                                    <hr class="styled-hr" style="width:100%;">
                                    <div style="height: 20px; overflow: hidden; width: 100%;"></div>
                                </div>
                                ` + ret;
                    }
                return ret;
                `
                    <div class="col-lg-2 col-md-3 col-6" style="margin-bottom:10px;">
                        <div class="card">
                            
                            <img src="${project.imageSrc}" class="card-img-top" style="padding:0%;"/>

                            <div class="card-body">
                                <h2 class="card-title coral">${project.projectName} </h4>
                                <h8 class="card-text" style="color:black;">${project.length} </h5>
                                <br>
                                <h6 class="card-text" style="color:black;">${project.role} </h5>
                                <h6 class="card-text" style="color:black;">${project.description} </h5>
                                <h6 class="card-text" style="color:black;">${(project.extra == undefined) ? "" : project.extra} </h5>
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
`