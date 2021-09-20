const filterData = (data, filter) => {
    let filterData = [];
    data.forEach((country) => {
    
      let filterPeople = [];
      country.people.forEach((people) => {
        let filterAnimals = people.animals.filter((animal) => animal.name.toLowerCase().includes(filter.toLowerCase()));
  
        if (filterAnimals.length > 0) {
          filterPeople = [...filterPeople, {
            name: people.name,
            animals: filterAnimals,
          }];
        }
      });
  
      if (filterPeople.length > 0) {
        filterData = [...filterData, {
          name: country.name,
          people: filterPeople,
        }];
      }
    })
    return filterData;
};



module.exports = {
    filterData
  };