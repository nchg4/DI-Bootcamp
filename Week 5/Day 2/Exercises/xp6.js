const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
  let result = '';
  
  for (let key in details) {
    result += `${key} ${details[key]} `;
  }
  
  result = result.trim();
  console.log(result); 
  