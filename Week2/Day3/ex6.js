let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


  let namesOfProprety = Object.getOwnPropertyNames(details);


  console.log(namesOfProprety[0] + " " + details.my + " " + namesOfProprety[1] + " " + details.is + " " + namesOfProprety[2] + " "+ details.the);