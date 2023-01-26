const tiketInput = document.getElementById('tiketInput')
const vremeInput = document.getElementById('vremeInput')

const CnfVreme = document.getElementById('CnfVreme')
const CelVreme = document.getElementById('CelVreme')
const CncVreme = document.getElementById('CncVreme')
const RolVreme = document.getElementById('RolVreme')

const CnfList = document.getElementById('CnfList')
const CelList = document.getElementById('CelList')
const CncList = document.getElementById('CncList')
const RolList = document.getElementById('RolList')

let ukupnoSati = document.getElementById("ukupnoSati")

let vreme1 = 0
let vreme2 = 0
let vreme3 = 0
let vreme4 = 0

const dodajUCtn = () => {
  let unos = tiketInput.value
  let obrisi = 'Ticket #'
  let brojTiketa = unos.replace(obrisi, '')
  vreme1 += +vremeInput.value
  CnfList.innerHTML =
    CnfList.innerHTML +
    `<p>https://app.placements.io/tickets/#/${brojTiketa}</p>`
  CnfVreme.innerText = `Create new flight ukupno: ${vreme1} min`
  tiketInput.value = ''
  vremeInput.value = ''
}
const dodajUCel = () => {
  let unos = tiketInput.value
  let obrisi = 'Ticket #'
  let brojTiketa = unos.replace(obrisi, '')
  vreme2 += +vremeInput.value
  CelList.innerHTML =
    CelList.innerHTML +
    `<p>https://app.placements.io/tickets/#/${brojTiketa}</p>`
  CelVreme.innerText = `Changes existing ukupno: ${vreme2} min`
  tiketInput.value = ''
  vremeInput.value = ''
}
const dodajUCnc = () => {
  let unos = tiketInput.value
  let obrisi = 'Ticket #'
  let brojTiketa = unos.replace(obrisi, '')
  vreme3 += +vremeInput.value
  CncList.innerHTML =
    CncList.innerHTML +
    `<p>https://app.placements.io/tickets/#/${brojTiketa}</p>`
  CncVreme.innerText = `Cancellation ukupno: ${vreme3} min`
  tiketInput.value = ''
  vremeInput.value = ''
}
const dodajURol = () => {
  let unos = tiketInput.value
  let obrisi = 'Ticket #'
  let brojTiketa = unos.replace(obrisi, '')
  vreme4 += +vremeInput.value
  RolList.innerHTML =
    RolList.innerHTML +
    `<p>https://app.placements.io/tickets/#/${brojTiketa}</p>`
  RolVreme.innerText = `Rollover ukupno: ${vreme4} min`
  tiketInput.value = ''
  vremeInput.value = ''
}

const obrisi = () => {
  const provera = confirm("Jesi li siguran da zelis da obrises odradjene tikete?")
  CnfList.innerHTML = ''
  CelList.innerHTML = ''
  CncList.innerHTML = ''
  RolList.innerHTML = ''
  CnfVreme.innerHTML = 'Create new flight ukupno:'
  CelVreme.innerHTML = 'Changes existing ukupno:'
  CncVreme.innerHTML = 'Cancellation ukupno:'
  RolVreme.innerHTML = 'Rollover ukupno:'
}

let ukupnoVreme = vreme1
ukupnoSati.innerText = `Ukupno sati: ${ukupnoVreme}`

//https://app.placements.io/tickets/#/75500


