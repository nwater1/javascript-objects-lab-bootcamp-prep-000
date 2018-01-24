var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign(object, { [key] :value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  new_object = object[key] = value
  return new_object
  
}

function deleteFromObjectByKey(object, key) {
  var new_object = Object.assign({}, object)
  return delete new_object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}



