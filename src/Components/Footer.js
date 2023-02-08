import React from 'react'

function Footer(props) {
  return (
    <div className='footer'>
      <p>Puppy Miracle je petshop koji postoji od 2015. godine. Bavimo se online prodajom hrane za pse, koju samostalno pravimo. Nasa hrana
        je uvek sveža, pripremljena u poslednjih 7 dana. Hranu proizvodimo od najkvalitetnijeg mesa, pomešanog sa odgovarajućim povrćem,
        suplementima i puno, puno ljubavi! Sigurni smo da će je i Vaš pas obožavati!  </p>
        <p onClick={props.prikaziKontakt}><u>Kontakt telefon:</u><b>{ props.brTelefona}</b></p>
        <p onClick={props.prikaziMejl}><u>Kontakt email:</u><b>{ props.email}</b></p>
        <p>Adresa: <i>Uskoro...</i></p>
    </div>
  )
}

export default Footer
