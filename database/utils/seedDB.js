const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageUrl: "http://www.hunter.cuny.edu/admissions/repository/images/classic-hunter-nyc-cabs.jpg",
		address: "68th street",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		imageUrl: "https://cdn-icons-png.flaticon.com/512/195/195496.png",
		address: "harvard address",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
			email: "joe@harvard.com",
			imageUrl: "https://www.eurocircuits.com/wp-content/uploads/Student-icon.jpg",
			gpa: 4.0
		});

	await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;
