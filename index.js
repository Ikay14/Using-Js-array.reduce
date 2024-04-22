let scores = {

    first: 400,
    second: 350,
    third: 250,
    fourth: 240,
    fifth: 230,
    
    }
    
    // extract the object values from the keys using Object.values method
    const arrScores = Object.values(scores)
    console.log(arrScores)
    
    //  to obtain the sum of all scores I will use array.reduce method  
    const totalScore = arrScores.reduce((sum, curr) => {
      return sum + curr
    })
    
    console.log(totalScore)