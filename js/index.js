// pega o cors e taca longe, aqui a gente passa por ele
let link = 'https://cors-anywhere.herokuapp.com/'


// aqui limpamos o conteúdo da div quando o botão for clicado, e adicionamos o conteúdo
var func1Executada = false;
var func2Executada = false;
var func3Executada = false;

Array.from($(".search").children('button')).forEach(function(element) {
    element.addEventListener("click", function(evt) {
        var valorTab = $(this).attr('id');


        if(valorTab === 'site1'){
            if($('.section-reviews').children().length > 0){
                var reviews = $('.section-reviews').children();
                $(reviews, '.hr').remove()
                func1Executada = true;
                if(func1Executada){
                    return false;
                }
                site1();
            }else{
                return false;
            }
        } else if(valorTab === 'site2'){
            if($('.section-reviews').children().length > 0){
                var reviews = $('.section-reviews').children();
                $(reviews, '.hr').remove()
                func2Executada = true;
                if(func2Executada){
                    return false;
                }
                site2();
            }else{
                return false;
            }
        } else if(valorTab === 'site3'){
            if($('.section-reviews').children().length > 0){
                var reviews = $('.section-reviews').children();
                $(reviews, '.hr').remove()
                func3Executada = true;
                if(func3Executada){
                    return false;
                }
                site3();
            }else{
                return false;
            }
        }         
    })
});

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
                // tirando o // da url da imagem "tentativa falha"
                let imagemLimpa = imagens.replace('//', '');
                console.log(imagemLimpa);
                
                
                // Jogando o conteúdo nas variáveis
                let titulo = $(tagHtml).children().children().children('.news-list__item__content__title').text();
                let descricao = $(tagHtml).children().children().children('.news-list__item__content__description').text();

                // console.log(descricao);


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
            //   console.log(divreview);
                $('.section-reviews').append(divreview)
            });
        }


    });
}

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
            //   console.log(divreview);
                $('.section-reviews').append(divreview)
            });
        }


    });
}

$("#site2").on("click",function(){
   site2()
});




// função para pegar o conteúdo do site 3
function site3() {
    $.ajax({
        // requisição para o site
        url: `${link}${"https://www.futurebehind.com/category/analises/"}`,
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
            var noticias = documento.body.querySelectorAll('.list-item');

            // console.log(noticias);

            // loop por cada div de notícia existente nessa birosca de site
            noticias.forEach(function(tagHtml) {
                //  Raspagem com js purinho
                let imagens = $(tagHtml).children('').children().attr('src');
                // tirando o // da url da imagem "tentativa falha"
                let imgLimpa = toString(imagens).slice(-2, 0);
                // Jogando o conteúdo nas variáveis
                let titulo = $(tagHtml).children().children().children('.cb-post-title').text();
                let descricao = $(tagHtml).children().children().children('.cb-excerpt').text();

            let divreview = `
            <div class="review">
            <div class="img-review"></div style="background-image: url(../img/banner/thewitcher3.png);">
            <div class="description-review">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
            </div>
            <hr/>
              `;
            //   console.log(divreview);
                $('.section-reviews').append(divreview)
            });
        }


    });
}

$("#site3").on("click",function(){
   site3()
});

// Iniciar com o conteúdo do primeiro site pra dar um tchan
$(document).ready(function(){
    var primeiroSite="https://www.theenemy.com.br/";
    site1(primeiroSite);
    func1Executada = true;
});


// Efeio no botão ativo
// $(document).ready(function(){
//     $("button").click(function(){
//         $("button").removeClass("fundo-btn");
//         $(this).css({color:"#FFF", backgroundColor: "#000" });
//     });
// })