/* =========================================
   CASE STUDIES DATA
========================================= */

const caseStudies = {

    case1: {
        number: "CASE STUDY 01",

        category: "ADVISORY & INSTITUTIONAL STRUCTURING",

        title: "Basketball Africa League Advisory",

        description:
            "MRM Sport Capital provides advisory support in relation to institutional structuring and governance enhancement within the basketball ecosystem, with a focus on supporting capital readiness and strengthening strategic positioning. The mandate involves contributing to the development of frameworks intended to improve operational structure, support investment preparedness and align broader commercial objectives with long-term growth ambitions. Through this engagement, the Group demonstrated capability in combining advisory expertise with practical structuring support within a global sports property environment."
    },


    case2: {
        number: "CASE STUDY 02",

        category: "PARTNERSHIPS & DEVELOPMENT",

        title: "Football Foundation Africa (Kenya)",

        description:
            "MRM Sport Capital has supported partnership and development opportunities involving Football Foundation Africa, focused on cross border collaboration, ecosystem development and strategic growth opportunities in the regional football market. The engagement reflects the Group’s ability to structure partnerships that combine development objectives with commercial opportunity."
    },


    case3: {
        number: "CASE STUDY 03",

        category: "TECHNOLOGY & PERFORMANCE",

        title: "Royal Bafokeng Sports",

        description:
            "Through Kick ID as a strategic partner platform, MRM Sport Capital has supported engagements linked to strategic advisory and development opportunities involving Royal Bafokeng Sports. The engagement has focused on performance intelligence, stakeholder engagement and broader ecosystem development opportunities, reflecting the Group’s ability to support institutional stakeholders through technology-enabled and commercially relevant solutions."
    },


    case4: {
        number: "CASE STUDY 04",

        category: "ATHLETE COMMERCIALISATION",

        title: "Mika Abrahams",

        description:
            "Athena Sports Management, a subsidiary of MRM Sport Capital, has supported opportunities linked to athlete commercialisation and talent pipeline development for its client Mika Abrahams. The engagement has focused on strategic advisory, commercial positioning and supporting athlete-related ecosystem opportunities, demonstrating the Group’s broader capability in talent and commercial management."
    }

};


/* =========================================
   OPEN CASE STUDY
========================================= */

function openCaseStudy(caseId) {

    const study = caseStudies[caseId];

    if (!study) return;

    document.getElementById("modal-case-number").textContent =
        study.number;

    document.getElementById("modal-case-category").textContent =
        study.category;

    document.getElementById("modal-case-title").textContent =
        study.title;

    document.getElementById("modal-case-description").textContent =
        study.description;


    document
        .getElementById("case-study-modal")
        .classList.add("active");

    document.body.classList.add("modal-open");
}


/* =========================================
   CLOSE CASE STUDY
========================================= */

function closeCaseStudy() {

    document
        .getElementById("case-study-modal")
        .classList.remove("active");

    document.body.classList.remove("modal-open");
}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCaseStudy();
    }

});