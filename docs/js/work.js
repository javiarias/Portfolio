const work  = (data.work == undefined) ? [] : data.work;



if(work.length > 0)
{
    document.getElementById("section-work").innerHTML = `
        <div class="container-fluid">
            <div class="d-flex justify-content-center fh5co-heading-white">
                <h2>Work history</h2>
            </div>
            <div class="container-fluid">
                <div class="row">
                    ${work.map(function (project) {
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
                                    <button class="column"> More info </button>
                                </div>
                            </div>
                        </div>
                        `
                }).join(' ')}
                </div>
            </div>
        </div>
    `
}