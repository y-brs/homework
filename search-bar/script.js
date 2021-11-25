const people = [
  { name: 'adri'},
  { name: 'becky'},
  { name: 'boris'},
  { name: 'chris'},
  { name: 'dillon'},
  { name: 'evan'},
  { name: 'frank'},
  { name: 'georgette'},
  { name: 'hugh'},
  { name: 'igor'},
  { name: 'jacoby'},
  { name: 'kristina'},
  { name: 'lemony'},
  { name: 'matilda'},
  { name: 'nile'},
  { name: 'ophelia'},
  { name: 'patrick'},
  { name: 'quincy'},
  { name: 'roslyn'},
  { name: 'solene'},
  { name: 'timothy'},
  { name: 'uff'},
  { name: 'violet'},
  { name: 'wyatt'},
  { name: 'x'},
  { name: 'yadri'},
  { name: 'zack'},
]

const listPerson = document.querySelector('.results-list'),
      searchInput = document.querySelector('.input'),
      clearButton = document.getElementById('clear')

searchInput.addEventListener("input", (e) => {
  let value = e.target.value

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase()

    setList(people.filter(person => {
      return person.name.includes(value)
    }))

  } else {
    clearList()
  }
})

clearButton.addEventListener("click", (e) => {
  e.preventDefault()
  searchInput.value = ''

  clearList()
})

function setList(results) {
  clearList()

  for (const person of results) {
    const resultItem = document.createElement('li'),
          text = document.createTextNode(person.name)

    resultItem.classList.add('result-item')
    resultItem.appendChild(text)
    listPerson.appendChild(resultItem)
  }

  if (results.length === 0 ){
    noResults()
  }
}

function clearList() {
  while (listPerson.firstChild) {
    listPerson.removeChild(listPerson.firstChild)
  }
}

function noResults(){
  const error = document.createElement('li'),
        text = document.createTextNode('No results found. Sorry!')

  error.classList.add('error-message')

  error.appendChild(text)
  listPerson.appendChild(error)
}
