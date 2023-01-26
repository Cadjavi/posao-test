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

let ukupnoSati = document.getElementById('ukupnoSati')

let vreme = [0, 0, 0, 0]
let ukupnoVreme = 0

const testFun = (staradi) => {
  let unos = tiketInput.value
  let obrisi = 'Ticket #'
  let brojTiketa = unos.replace(obrisi, '')
  vreme[staradi] += +vremeInput.value

  switch (staradi) {
    case 0:
      CnfList.innerHTML += `<br>https://app.placements.io/tickets/#/${brojTiketa}`
      CnfVreme.innerText = `Create new flight ukupno: ${vreme[staradi]} min`
      break
    case 1:
      CelList.innerHTML += `<br>https://app.placements.io/tickets/#/${brojTiketa}`
      CelVreme.innerText = `Changes existing ukupno: ${vreme[staradi]} min`
      break
    case 2:
      CncList.innerHTML += `<br>https://app.placements.io/tickets/#/${brojTiketa}`
      CncVreme.innerText = `Changes existing ukupno: ${vreme[staradi]} min`
      break
    case 3:
      RolList.innerHTML += `<br>https://app.placements.io/tickets/#/${brojTiketa}`
      RolVreme.innerText = `Changes existing ukupno: ${vreme[staradi]} min`
      break
  }
  tiketInput.value = ''
  vremeInput.value = ''

  ukupnoVremeMin = (vreme[0] + vreme[1] + vreme[2] + vreme[3])
  ukupnoVremeSati = ukupnoVremeMin /60
  ukupnoSati.innerText = `Ukupno sati: ${(ukupnoVremeSati.toFixed(2))} h ili ${ukupnoVremeMin} min`
}

const obrisi = () => {
  const provera = confirm(
    'Jesi li siguran da zelis da obrises odradjene tikete?'
  )
  window.location.reload();
}

// function copyToClipboard() {
//   const copyText = CnfList.value
//   navigator.clipboard.writeText(copyText).then(() => {
//     alert('Kopirano')
//   })
// }

//https://app.placements.io/tickets/#/75500
