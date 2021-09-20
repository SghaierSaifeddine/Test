const countData = (data) => {
    let countData = [];

    data.forEach((country) => {
      let countPeople = [];
  
      country.people.forEach((people) => {
        countPeople = [...countPeople, {
          name: `${people.name} [${people.animals.length}]`,
          animals: people.animals,
        }];
      });
  
      countData = [...countData, {
        name: `${country.name} [${country.people.length}]`,
        people: countPeople,
      }];
    })
    return countData;
};



module.exports = {
    countData
  };