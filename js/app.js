// function comprar() {
//     let tipo = document.getElementById('tipo-ingresso');
//     let qtd = parseInt(document.getElementById('qtd').value);

//     if (tipo.value == 'pista') {
//         comprarPista(qtd);
//     } else if (tipo.value == 'superior') {
//         comprarSuperior(qtd);
//     } else {
//         comprarInferior(qtd);
//     }
// }

// function comprarPista(qtd) { // refazr essa logica para os outros ingressos
//     let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
//     if (qtd > qtdPista) {
//         alert('Quantidade indisponível para tipo pista');
//     } else {
//         qtdPista = qtdPista - qtd;
//         document.getElementById('qtd-pista').textContent = qtdPista;
//         alert('Compra realizada com sucesso!');
//     }
// }