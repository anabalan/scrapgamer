// pega o cors e taca longe, aqui a gente passa por ele
let link = 'https://cors-anywhere.herokuapp.com/'

// função para pegar o conteúdo do site 1 - The Enemy
function site1() {
    $.ajax({
        // requisição para o site
        url: `${link}${"https://www.theenemy.com.br/"}`,
        type: 'get',
        dataType: "html",
        error: function(err) {
            console.log(err)
        },
        success: function(data) {
            // tornando o conteúdo legível
            var parser = new DOMParser();
            var documento = parser.parseFromString(data, "text/html");

            // selecionando a div que contém a notícia
            var noticias = documento.body.querySelectorAll('.news-list--big .news-list__item ');

            // console.log(noticias);

            // loop por cada div de notícia existente nessa birosca de site
            noticias.forEach(function(tagHtml) {
                //  Raspagem com js purinho
                let imagens = $(tagHtml).children('').children().attr('src');
                // tirando o // da url da imagem
                let imagemLimpa = imagens.replace('//', '');
                // console.log(imagemLimpa);
                // Jogando o conteúdo nas variáveis
                let titulo = $(tagHtml).children().children().children('.news-list__item__content__title').text();
                let descricao = $(tagHtml).children().children().children('.news-list__item__content__description').text();
                // console.log(descricao);

            // jogando o conteúdo nas div
            let divreview = `
            <div class="review">
            <div class="img-review" style="background-image: url(https://${imagemLimpa});"></div>
            <div class="description-review">
                <h3>${titulo}</h3>
                <p>${descricao} </p>
            </div>
            </div>
            <hr/>
              `;
                $('.section-reviews').append(divreview)
            });
        }


    });
}

// função ao clicar no botão do filtro
$("#site1").on("click",function(){
   site1()
});


// função para pegar o conteúdo do site 2 - Voxel
function site2() {
    $.ajax({
        // requisição para o site
        url: `${link}${"https://www.voxel.com.br/"}`,
        type: 'get',
        dataType: "html",
        error: function(err) {
            console.log(err)
        },
        success: function(data) {
            // tornando o conteúdo legível
            var parser = new DOMParser();
            var documento = parser.parseFromString(data, "text/html");

            // selecionando a div que contém a notícia
            var noticias = documento.body.querySelectorAll('.home-vertical-news-item');
            
            // console.log(noticias);
            
            // loop por cada div de notícia existente nessa birosca de site
            noticias.forEach(function(tagHtml) {
                //  Raspagem com js purinho
                let imagens = $(tagHtml).children().children('.home-vertical-news-img .lazyloaded').attr('src');
                // Jogando o conteúdo nas variáveis
                let titulo = $(tagHtml).children().children().children('.home-vertical-news-title').text();
            
            // jogando o conteúdo nas divs
            let divreview = `
            <div class="review">
            <div class="img-review" style="background-image: url(https://${imagens});"></div>
            <div class="description-review">
                <h3>${titulo}</h3>
                <p>PLATAFORMAS</p>
            </div>
            </div>
            <hr/>
              `;
                $('.section-reviews').append(divreview)
            });
        }


    });
}

$("#site2").on("click",function(){
   site2()
});