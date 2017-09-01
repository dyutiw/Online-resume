var bio = {
	"name": "Dyuti Waghray",
	"role": "Student Fresher",
	"contacts": {
		"email": "dyuti.w@gmail.com",
		"github": "dyutiw",
		"twitter": "@dyutiW",
		"location": "Hyderabad, India"
	  },
		"bioPic" : " ",
	"welcomeMessage": "I just completed a B.E in IEM.",
	"skills": [ "Java", "python","HTML/CSS"]
};

var workExperience = {
	"jobs": {
		"employer": "none",
		"title":"Fresher",
		"dates":"in progress",
	},
};

var education = {
	"schools": [
		{ "name": "JSSATE, Bangalore",
			"dates": "2013 - 2017",
			"location": "Bangalore, India",
			"degree": "B.E",
			"majors": "Industrial engineering and management",
			"url": "http://jssateb.ac.in/"
		}
	],
	"onlineCourses":
		{ "school": "Udacity",
			"title": "Intro to programming nanodegree",
			"dates": "July 2017",
			"url": "https://in.udacity.com/course/intro-to-programming-nanodegree--nd000/"
		}
};

var Projects = {
	"projects":
		{
			"title": "Movie website",
			"datesWorked": "May 2017",
			"description": "Created a movie website for intro to programming nanodegree"
		}

};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(var i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(var i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

work.display = function() {


		$("#workExperience").append(HTMLworkStart);
};
displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for( i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};
education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		}
	});
});
