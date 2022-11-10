

var retorno, pesquisa = ''
var input = document.getElementById('pesquisa')
console.log(input.value)

input.addEventListener('change', () => {
    pesquisa = input.value;
    console.log(pesquisa)
})

document.getElementById('botao').addEventListener('click', async function () {
    retorno = await Search(pesquisa)
    console.log(retorno)
})


// {
//     pesquisa.map(item => {
//         return (
//           <div className='itemBD' id={item.id}>
//             <img className='itemImagem' src={item.imagem}></img>
//               <h1 className="itemNome">{item.nome}</h1>
//               <h3 className='itemArtista'>{item.artista}</h3>
            
//           </div>
//         )
//       })
//   }