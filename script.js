
document.querySelector('.download-btn').addEventListener('dblclick', function () {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    html2canvas(document.getElementById('template')).then((cont) => {
        let imgData = cont.toDataURL('image/png');
        let imgWidth = 210; // A4 width in mm
        let imgHeight = (cont.height * imgWidth) / cont.width;

        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        doc.save('resume.pdf');
});
});


let preBtn = document.getElementsByClassName("pre-btn")[0];
preBtn.addEventListener("dblclick", () => {
    document.getElementsByClassName("form")[0].style.display = "block";
    document.getElementsByClassName("pre-btn")[0].style.display = "none";
    document.getElementsByClassName("download-btn")[0].style.display = "none";

})


let lastBtn = document.getElementsByClassName("prv")[0];
lastBtn.addEventListener("dblclick", () => {
    document.getElementsByClassName("download-btn")[0].style.display = "block";

    document.getElementsByClassName("form")[0].style.display = "none";

    document.getElementsByClassName("name-t")[0].innerHTML = document.getElementById("name").value;
    document.getElementsByClassName("rollNo-t")[0].innerHTML = document.getElementById("roll").value;
    document.getElementsByClassName("prgm-t")[0].innerHTML = document.getElementById("pgm").value;
    document.getElementsByClassName("crs-t")[0].innerHTML = document.getElementById("crs").value;
    document.getElementsByClassName("no-t")[0].innerHTML = document.getElementById("no").value;

    document.getElementsByClassName("gthb-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("href", document.getElementById("gh").value);
    document.getElementsByClassName("gthb-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("target", "_blank");

    document.getElementsByClassName("lnkd-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("href", document.getElementById("li").value);
    document.getElementsByClassName("lnkd-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("target", "_blank");

    document.getElementsByClassName("mail-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("href", document.getElementById("email").value);
    document.getElementsByClassName("mail-t")[0]
        .getElementsByTagName("a")[0]
        .setAttribute("target", "_blank");
    document.getElementsByClassName("mail-t")[0]
        .getElementsByTagName("a")[0].innerHTML
        = document.getElementById("email").value;



    for (let i = 0; i <= 10; i++) {
        if (document.getElementsByClassName("ed-t")[i]) {
            document.getElementsByClassName("ins-name")[i].innerHTML = document.getElementsByClassName("ed-t")[i].querySelector("#ins").value;
            document.getElementsByClassName("ins-d")[i].innerHTML = document.getElementsByClassName("ed-t")[i].querySelector("#deg").value;
            document.getElementsByClassName("ins-year")[i].innerHTML = document.getElementsByClassName("ed-t")[i].querySelector("#yr").value;
            document.getElementsByClassName("ins-cg")[i].innerHTML = document.getElementsByClassName("ed-t")[i].querySelector("#cg").value;
        }
        else {
            break;
        }
    }

    for (let i = 0; i <= 10; i++) {
        if (document.getElementsByClassName("prj-t")[i]) {
            document.getElementsByClassName("prj-name")[i].innerHTML = document.getElementsByClassName("prj-t")[i].querySelector("#prj-nm").value;
            document.getElementsByClassName("prj-d")[i].innerHTML = document.getElementsByClassName("prj-t")[i].querySelector("#prj-desc").value;
            document.getElementsByClassName("prj-b-d")[i].innerHTML = document.getElementsByClassName("prj-t")[i].querySelector("#prj-dt").value;
            document.getElementsByClassName("prj-b-n")[i].getElementsByClassName("li")[0].innerHTML = document.getElementsByClassName("prj-t")[i].querySelector("#prj-tg").value;
            document.getElementsByClassName("prj-b-n")[i].getElementsByClassName("li")[1].innerHTML = document.getElementsByClassName("prj-t")[i].querySelector("#prj-md").value;
        }
        else {
            break;
        }
    }


    for (let i = 0; i <= 10; i++) {
        if (document.getElementsByClassName("skill-t")[i]) {
            document.getElementsByClassName("skill-b-n")[i].getElementsByTagName("li")[0].innerHTML = document.getElementsByClassName("skill-t")[i].querySelector("#sk").value;

        }
        else {
            break;
        }
    }


    for (let i = 0; i <= 10; i++) {
        if (document.getElementsByClassName("achv-t")[i]) {
            document.getElementsByClassName("achv-name")[i].innerHTML = document.getElementsByClassName("achv-t")[i].querySelector("#achv-achv").value;
            document.getElementsByClassName("achv-d")[i].innerHTML = document.getElementsByClassName("achv-t")[i].querySelector("#achv-des").value;
            document.getElementsByClassName("achv-b-d")[i].innerHTML = document.getElementsByClassName("achv-t")[i].querySelector("#achv-dt").value;

        }
        else {
            break;
        }
    }


    for (let i = 0; i <= 10; i++) {
        if (document.getElementsByClassName("pos-t")[i]) {
            document.getElementsByClassName("pos-name")[i].innerHTML = document.getElementsByClassName("pos-t")[i].querySelector("#pos-pos").value;
            document.getElementsByClassName("pos-d")[i].innerHTML = document.getElementsByClassName("pos-t")[i].querySelector("#pos-cb").value;
            document.getElementsByClassName("pos-b-d")[i].innerHTML = document.getElementsByClassName("pos-t")[i].querySelector("#pos-tn").value;

        }
        else {
            break;
        }
    }

    document.getElementsByClassName("pre-btn")[0].style.display = "block";
});






let btn1 = document.getElementsByClassName("btn-ed")[0];
btn1.addEventListener("dblclick", () => {
    document.getElementsByClassName('ed-t')[0].insertAdjacentHTML("afterend", ` <div class="ed-t body">
    <div class="elm">
        <label for="ins">Institute</label>
        <input type="text" id="ins"/>
    </div>
    <div class="elm">
        <label for="deg">Degree</label>
        <input type="text" id="deg"/>
    </div>
    <div class="elm">
        <label for="yr">Year</label>
        <input type="text" id="yr"/>
    </div>
    <div class="elm">
        <label for="cg">CGPA/Percentage</label>
        <input type="text" id="cg" />
    </div>
   
</div>`)
    document.getElementsByClassName("ed-temp-b")[0].insertAdjacentHTML("afterend", ` <div class="ed-temp-b temp-b">
                    <div class="ed-b-n temp-bl">
                        <div class="ins-name">Your Institute Name</div>
                        <div class="ins-d">Your Degree and Course Name</div>
                    </div>
                    <div class="ed-b-y temp-br">
                        <div class="ins-year">Year</div>
                        <div class="ins-cg">CGPA/Percentage</div>
                    </div>
                </div>`)
});

let btn2 = document.getElementsByClassName("btn-prj")[0];
btn2.addEventListener("dblclick", () => {
    document.getElementsByClassName('prj-t')[0].insertAdjacentHTML("afterend", ` <div class="prj-t body">
                <div class="elm">
                    <label for="prj-nm">Project Name</label>
                    <input type="text" id="prj-nm">
                </div>
                <div class="elm">
                    <label for="prj-desc">Project Description</label>
                    <input type="text" id="prj-desc">
                </div>
                <div class="elm">
                    <label for="prj-tg">Technologies Used</label>
                    <input type="text" id="prj-tg">
                </div>
                <div class="elm">
                    <label for="prj-md">More Description</label>
                    <input type="text" id="prj-md">
                </div>
                <div class="elm">
                    <label for="prj-dt">Date</label>
                    <input type="date" id="prj-dt">
                </div>
            </div>`)
    document.getElementsByClassName("prj-temp-b")[0].insertAdjacentHTML("afterend", ` <div class="prj-temp-b temp-b">
                    <div class="prj-b-n temp-bl">
                        <div class="prj-name">Project Name</div>
                        <div class="prj-d">Project description</div>
                        <li>Tools and technologies used</li>
                        <li>More description on project</li>
                    </div>
                    <div class="prj-b-d temp-br">Event Date </div>
                </div>`)

});

let btn3 = document.getElementsByClassName("btn-skill")[0];
btn3.addEventListener("dblclick", () => {
    document.getElementsByClassName('skill-t')[0].insertAdjacentHTML("afterend", ` <div class="skill-t body">
                <div class="elm">
                    <label for="sk">Skill</label>
                    <input type="text" id="sk">
                </div>
            </div>`)
    document.getElementsByClassName("skill-temp-b")[0].insertAdjacentHTML("afterend", `<div class="skill-temp-b temp-b">
                    <div class="skill-b-n temp-bl">
                    <li>Skills</li>
                    </div>
                   
                </div>`)

});

let btn4 = document.getElementsByClassName("btn-achv")[0];
btn4.addEventListener("dblclick", () => {
    document.getElementsByClassName('achv-t')[0].insertAdjacentHTML("afterend", ` <div class="achv-t body">
            <div class="elm">
                <label for="achv-achv">Achievement</label>
                <input type="text" id="achv-achv">
            </div>
            <div class="elm">
                <label for="achv-dese">Description</label>
                <input type="text" id="achv-des">
            </div>
            <div class="elm">
                <label for="achv-dt">Date</label>
                <input type="date" id="achv-dt">
            </div>
        </div>`)
    document.getElementsByClassName("achv-temp-b")[0].insertAdjacentHTML("afterend", ` <div class="achv-temp-b temp-b">
                    <div class="achv-b-n temp-bl">
                        <div class="achv-name">Achievement</div>
                        <div class="achv-d">Description</div>
                    </div>
                    <div class="achv-b-d temp-br">Event Date
                    </div>
                </div>`)

});

let btn5 = document.getElementsByClassName("btn-pos")[0];
btn5.addEventListener("dblclick", () => {
    document.getElementsByClassName('pos-t')[0].insertAdjacentHTML("afterend", ` <div class="pos-t body">
            <div class="elm">
                <label for="pos-pos">Position</label>
                <input type="text" id="pos-pos">
            </div>
            <div class="elm">
                <label for="pos-cb">Club Name</label>
                <input type="text" id="pos-cb">
            </div>
            <div class="elm">
                <label for="pos-tn">Tenure</label>
                <input type="text" id="pos-tn">
            </div>
        </div>`)
    document.getElementsByClassName("pos-temp-b")[0].insertAdjacentHTML("afterend", `  <div class="pos-temp-b temp-b">
                    <div class="pos-b-n temp-bl">
                        <div class="pos-name">Position</div>
                        <div class="pos-d">Club or Event</div>
                    </div>
                    <div class="pos-b-d temp-br">Event Date
                    </div>
                </div>`)
});


