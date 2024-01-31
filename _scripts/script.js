
$('section.testemunha').waypoint(function(direcao){
    if (direcao == 'down'){
        $('div.testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
}
    if(direcao == 'up'){
        $('div.testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }

 },{
    offset:'400px;'
})

$('div.transicao-testemunha-plano').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div.decoracao2').removeClass('animate__animated animate__fadeOut animate__slow');
        $('div.decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');

        $('div.decoracao1').addlass('animate__animated animate__fadeInLeft animate__slow');
        $('div.decoracao2').addlass('animate__animated animate__fadeIn animate__slow');
        $('div.decoracao3').addlass('animate__animated animate__fadeInRight animate__slow');
    } else{
        $('div.decoracao1').addlass('animate__animated animate__fadeOutLeft animate__slow');
        $('div.decoracao2').addlass('animate__animated animate__fadeOut animate__slow');
        $('div.decoracao3').addlass('animate__animated animate__fadeOutRight animate__slow')
    }
})

$('section.domingo-perfeito').waypoint(function(direcao)
    { if (direcao == "down") { 
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow'); 
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');

}

if (direcao == "up"){
    $('div.folha1').removeClass('animate__animated animate__fadeInUp'); 
    $('div.folha3').removeClass('animate__animated animate__fadeInUp');
    $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
    $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
    $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
    $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');
}

},{ 

})

$('section.domingo-perfeito').waypoint(function
    /*direcao = representa um espaço reservado na memoria que irá guardar como o usuario chegou naquele elemento html,as duas possibilidades serão up(subindo) down(descendo)*/
    (direcao) {
    /**/
    if (direcao == 'down') {
        $('section.pizza p').addClass('animate__animated animate__fadeInUp');
    }
    if (direcao == 'up') {
        $('section.pizza p').removeClass('animate__animated animate__fadeInUp');
    }

},{
    offset:'450px;'
})
