$('#pesquisar').on('click', function(){
    //pegando o valor do input
    let valor = $('#estado').val()
    //convertendo o valor do input em letras minusculas
    var valorB = valor.toLowerCase()
    //funçao para trocar os caracteres especiais por letras normais
    function troca(vogal){
    return vogal.replace(/[ã]/g, 'a').replace(/[í]/g, 'i').replace(/[á]/g, 'a').replace(/[ô]/g, 'o')
    }
    //chamando a função para o valor digitado e convertido no input
    valorB = troca(valorB)
    //URL + valorb que será o estado digitado pelo usuário, ja convertido pelas linhas acima
    var url = 'https://my-json-server.typicode.com/Felipecpo1/main/cursos/' + valorB
    //AJAX para abertura de conexão com o json criado
    $.ajax(url)
        .done(function(json){
            //stringfy para o json capturadp
            var string = JSON.stringify(json)
            //conversão do json capturado para objeto
            var objs = JSON.parse(string)
            //limpando o campo de infos toda vez que um nova estado for pesquisado
            $('#infos').empty()
            //removendo o que foi digitado no camp de pesquisa 
            $('#estado').val('')
            //mostrando o json capturado e convertido para html
            $('#infos').append(`<img src = '${objs.url}'/><br>`+'<div>Estado: ' + objs.estado+'<br> Capital: '+objs.capital + '<br> População: ' + objs.populacao + '</div>')
        }
        )
        .fail(function(){
            alert('Estado não encontrado')
        })
}
)
$('#estado').keyup(function(event){
        if(event.keyCode === 13){
            $('#pesquisar').click();
         }
    });