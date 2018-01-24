var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign(object, { [key] :value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  new_object = object[key] = value
  return new_object
  
}

function deleteFromObjectByKey(object, key) {
  return delete object[key]
}

