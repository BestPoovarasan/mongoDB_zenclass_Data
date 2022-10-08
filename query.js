// 1. Find all the topics and tasks which are thought in the month of October
db.topics.find({ month: "oct" });

// 2. Find all the company drives which appeared between 15 oct-2022 and 31-oct-2022
db.companydrives.find({
    $and: [
      {
        date: { $gt: "15-oct-2022" },
      },
      {
        date: { $lt: "31-oct-2022" },
      },
    ]
  });

// 3. Find all the company drives and students who are appeared for the placement.
db.companydrives.find(
    {},
    {
      "company": 1,
      "appeared": 1,
    }
  );

// 4. Find the number of problems solved by the user in codekata
db.students.find({},{codekata:1})


// 5. Find all the mentors with who has the mentee's count more than 15
db.mentors.find({menteesCount: {$gt:15}})
