const studentScore = [23, 45, 21, 24, 42, 32.5, 11]

const data = [
  {
    id: 1,
    name: "olawale",
    age: 23
  },
  {
    id: 2,
    name: "jibike",
    age: 42
  },
  {
    id: 3,
    name: "Jibike",
    age: 34
  }
];

const jame = 'jibike'

const data1 = data.filter((score)=>{
    return (score.name.toLowerCase()==jame.toLowerCase())
})

console.log(data1)

data1.map(result =>{
    return document.write(result.name, " ", result.age, " ") 
}) 