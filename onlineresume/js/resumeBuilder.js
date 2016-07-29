var bio = {
    "name": "Bharadwaja Cheruvu",
    "role": "Java Application Developer",
    "welcomeMessage": "Welcome to my resume",
    "bioPic": "images/profilepic.jpg",
    "contacts": {
        "email": "cbharadwaja1@gmail.com",
        "mobile": "440-732-1742",
        "twitter": "cbharad",
        "github": "cbharadwaja",
        "location": "Sunnyvale, CA"
    },
    "skills": ["Java", "JavaScript", "BootStrap"]
};

var work = {
    "jobs": [{
        "employer": "Visa Inc.",
        "title": "Information Security Ananlyst",
        "location": "Foster City, CA",
        "dates": '2015 - In Progress',
        "description": "Information Security professional to review and make sure there are no Security issues in the code deployed"
    }, {
        "employer": "Cognizant Technology Solutions",
        "title": "Associate",
        "location": "Cleveland, OH",
        "dates": '2012 - 2015',
        "description": "Java Backend Application Developer"
    }, {
        "employer": "Corelogic Inc.",
        "title": "Software Engineer",
        "location": "Bangalore, India",
        "dates": '2009 - 2012',
        "description": "Java Application Developer"
    }]
};

var projects = {
    "projects": [{
        "title": "Resume Builder",
        "dates": "2016",
        "description": "Resume Builder description",
        "images": []
    }, {
        "title": "Animal Trade Cards",
        "dates": "2016",
        "description": "Animal Trade Cards description",
        "images": []
    }]
}

var education = {
    "schools": [{
        "name": "Vellore Insititute of Technology",
        "location": "Vellore, India",
        "degree": "Masters",
        "majors": ["Software Engineering"],
        "dates": 2009,
        "url": "http://vit.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://udacity.com"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedPic);
    $('#header').append(formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);
    for (var i in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $('#skills').append(formattedSkill);
    };
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedLocation);

    $('#main').append(internationalizeButton);
}

work.display = function() {
for (i in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedDates = HTMLprojectDates.replace("%data%", work.jobs[i].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedEmployer+formattedJobTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
}
}

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i in projects.projects) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDesc);
        $(".project-entry:last").append(formattedProjectImages);
    }
}

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (i in education.schools) {
        var formattedSchoolTitle = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolTitle);
        $("a:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }
}

education.displayOnlineCourses = function() {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (i in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineTitle);
        $("a:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

bio.display();
work.display();
projects.display();
education.display();
education.displayOnlineCourses();

$('#mapDiv').append(googleMap);