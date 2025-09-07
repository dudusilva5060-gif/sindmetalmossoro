function faz(dado, faz) {


    $.post("../adm/faz.php", {
            dados: dado,
            faz: faz
        },
        function(data, status) {


            if (faz == 'enviacontato') {
                M.toast({
                    html: 'Mensagem Enviada ' + data,
                    classes: 'rounded'
                });

                $("#name,#email,#subject,#telefone,#message").val("");
            }

            if (faz == 'mudarcor') {
                M.toast({
                    html: 'Estilos de Cores Alteradas',
                    classes: 'rounded'
                });
            }

            if (faz == 'mudafonte') {
                M.toast({
                    html: 'Alterado Estilos de Fontes',
                    classes: 'rounded'
                });
            }

            if (faz == 'mudahead') {
                M.toast({
                    html: 'Alterado Topo do Site',
                    classes: 'rounded'
                });
            }

            if (faz == 'mudacapaagora') {
                M.toast({
                    html: 'Imagem de Capa Alterada',
                    classes: 'rounded'
                });

                $(".capashp").css("background-color", "#ffffff");

                dado = dado.replace(".jpg", "");
                dado = dado.replace(".jpeg", "");
                dado = dado.replace(".gif", "");
                dado = dado.replace(".png", "");

                $("." + dado).css("background-color", "#483D8B");


            }
            if (faz == 'mudacapa_del') {

                M.toast({
                    html: 'Imagem Removida ' + faz + '/' + dado + '',
                    classes: 'rounded'
                });

                $("#divcapa_" + dado).css("display", "none");
                //   $("#divcapa_"+dado).hide();

            }

            if (faz == 'mudahp') {
                M.toast({
                    html: 'Alterado Modelo da Home Page' + data + '',
                    classes: 'rounded'
                });


                $(".modelos_home").css("background-color", "#fff");

                $("." + dado).css("background-color", "#483D8B");


            }

        });

}


function mudacor(mod, principal, secundaria, bg, letra) {

    var dados = [mod, principal, secundaria, bg, letra];
    dados = JSON.stringify(dados);

    faz(dados, 'mudarcor');
    //  alert(dados); 
}


// UPLOAD CAPA


$('#btEnviar').click(function() {

});
$(document).ready(function() {
    $('#btEnviar').click(function() {
        //   alert($("#capas").val());
        var form_data = new FormData();

        form_data.append('file', $('#file').prop('files')[0]);
        form_data.append('seu_nome', $("#capas").val());
        form_data.append('sua_senha', $("#sua_senha").val());


        $.ajax({
            url: 'includes/up.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data) {

                $("#divcapas").append(data);

            }
        });
    });
});


function mudacapa(f) {
    faz(f, 'mudacapaagora');
}

function mudacapa_del(f) {
    faz(f, 'mudacapa_del');
}


$(document).ready(function() {
    $('#btEnviarHP').click(function() {
        //   alert($("#capas").val());
        var form_data = new FormData();

        form_data.append('file', $('#filehp').prop('files')[0]);
        form_data.append('seu_nome', $("#capas").val());
        form_data.append('sua_senha', $("#sua_senha").val());


        $.ajax({
            url: 'includes/uphp.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data) {

                $("#divhp").append(data);

            }
        });
    });
});
// UPLOAD HP

function mudafonte(f) {
    faz(f, 'mudafonte');

    //var ocontato = [name,email,assunto,telefone,mensagem];
    //ocontato  = JSON.stringify(ocontato);

}

function mudahead(f) {
    faz(f, 'mudahead');
}

function mudahp(f) {
    faz(f, 'mudahp');
}

function fechadvgaleria() {
    //$(".dvgaleria").hide();
}

function abreft(e) {

    //$(".dvgaleria").show();
    //$("#divgaleriag").html($("#dvcarousel").html());


    //divgaleriag
    //dvcarousel
}

//$("#navprojetos").html($("#box_institucional").html());


$("#bt_enviacontato").click(function() {

    var name = $("#name").val();
    var email = $("#email").val();
    var assunto = $("#subject").val();
    var telefone = $("#telefone").val();
    var mensagem = $("#message").val();
    var ocontato = [name, email, assunto, telefone, mensagem];
    ocontato = JSON.stringify(ocontato);

    faz(ocontato, 'enviacontato');


});



/////////////////// 19/12/2020 | 19/21/2020 

//// CONTATO