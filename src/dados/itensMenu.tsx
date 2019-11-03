const Modulos = {
    'cadastro': [
        'empresa',
        'parceiroNegocios',
        'grupoParceiro',
        'subgrupoParceiro',
        'centroCusto',
        'planoContas',
        'formaPagamento',
        'prazoPagamento',
        'tipoDocumento',
        'municipio',
        'setor',
    ],
    'estoque': [
        'material',
        'entradaMaterial',
        'movimentoMaterial',
        'unidadeMedida',
        'grupo',
        'subGrupo',
        'localizacao',
        'recipiente',
        'importacao',
    ],
    'financeiro': [
        'contaPagar',
        'baixaEmBlocoPagar',
        'contaReceber',
        'baixaEmBlocoReceber',
        'banco',
        'historicoPadrao',
        'contaCorrente',
        'transferenciaContas',
        'movimentoFinanceiro',
        'boleto',
        'arquivoRemessa',
    ],
    'exame': [
        'exame',
        'movimentoExame',
        'materiaisExame',
        'importarXML',
    ],
    'esmeraldaVisual': [
        'importCaixaEV',
        'importNFe',
        'importFaturas',
        'importMoviExame',
    ],
    'relatorios': [
        'composicaoMaterial',
        'materiais',
        'inventario',
        'estoqueMinimo',
        'estoqueCentroCusto',
        'movimentacaoMaterial',
        'movimentacaoMaterialSinetico',
        'contaPagarAnalitico',
        'contaReceberAnalitico',
        'relacaoCliente',
        'movimentacaoFinanceira',
        'listPlanoContas',
        'balancete',
        'materialUtilizados',

    ],
    'seguranca': [
        'usiario',

    ],
    'configuracao': [
        'periodicidade',
        'parametrosMateriais',
        'parametrosGerais',
        'parametrosFinanceiros',
        'parametrosEV',
        'correcoes',


    ],
}



export default Modulos;