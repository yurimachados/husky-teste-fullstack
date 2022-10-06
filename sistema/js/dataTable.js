$(document).ready( function () {
      
    var table = $('#orderTable').DataTable({
        paging: true,
        searching: true,
        serverSide: true,
        processing: true,
        ajax: {
            url: 'http://localhost/entregas_top/sistema/datatable_data.php',
            type:'POST',
        },
        language: {
            lengthMenu: 'Exibir _MENU_ registros por página',
            zeroRecords: 'Nada encontrado',
            info: 'Mostrando página _PAGE_ de _PAGES_',
            infoEmpty: 'Sem registros disponíveis',
            infoFiltered: '(filtrados de _MAX_ total de registros)',
            search: 'Pesquisa: ',
            paginate: { previous: 'Anterior', next: 'Próxima' },
        },
        columns: [
            { data: 'Nº_da_entrega'},
            { data: 'Cliente'},
            { data: 'Entregador'},
            { data: 'Endereço_de_Coleta'},
            { data: 'Endereço_de_Entrega'},
            { data: 'Status'},
            { data: 'Hora de criação'},
        ]
        
    });
} );