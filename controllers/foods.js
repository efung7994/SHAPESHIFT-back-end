async function getFoodData(req, res) {
  const apiResponse = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=c1e938fb&app_key=b3787a4116b215e200e3f90eb63d86ab`)
  const foodData = await apiResponse.json()
  res.json(foodData)
}

export {
  getFoodData
}