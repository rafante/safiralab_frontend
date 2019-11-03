const Modulos = [
    {
        nome: 'cadastro',
        contextos: [
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
        ]
    },
    {
        nome: 'estoque',
        contextos: [
            'material',
            'entradaMaterial',
            'movimentoMaterial',
            'unidadeMedida',
            'grupo',
            'subGrupo',
            'localizacao',
            'recipiente',
            'importacao',
        ]
    },
    {
        nome: 'financeiro',
        contextos: [
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
        ]
    },
    {
        nome: 'exame',
        contextos: [
            'exame',
            'movimentoExame',
            'materiaisExame',
            'importarXML',
        ]
    },
    {
        nome: 'esmeraldaVisual',
        contextos: [
            'importCaixaEV',
            'importNFe',
            'importFaturas',
            'importMoviExame',
        ]
    },
    {
        nome: 'relatorios',
        contextos: [
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
        ]
    },
    {
        nome: 'seguranca',
        contextos: [
            'usiario',

        ]
    },
    {
        nome: 'configuracao',
        contextos: [
            'periodicidade',
            'parametrosMateriais',
            'parametrosGerais',
            'parametrosFinanceiros',
            'parametrosEV',
            'correcoes',


        ],
    }]



export default Modulos;