import { useEffect } from "react";
import { changeSelectValue } from "../../../script/changeSelectValue";
import axios from "axios";
import type { FormEvent } from "react";


function DashboardInsercaoMonitor() {
    useEffect(() => {
        changeSelectValue('monitor')
    });

    async function handleCreateProdutoMonitor(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        try {
            await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
                nome: data.nome,
                fabricante: data.fabricante,
                modelo: data.modelo,
                preco: Number(data.preco),
                vendedor: data.vendedor,
                linkProduto: data.linkProduto,
                categoria: "Monitor",
                especificacoes: {
                    "tamanho": data.tamanho, "resolucaover": data.resolucaover,
                    "taxadeatualiz": data.taxadeatualiz
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ paddingTop: '7rem' }}>


            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Gabinete</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoMonitor} className="form-horizontal">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Link</label>
                                    <input type="text" name="nome-produto" placeholder="Link" className="form-control" />
                                    <small className="help-block form-text text-muted">Link url do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Preço</label>
                                    <input type="text" name="preco-input" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome-produto" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante-processador" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo-input" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Resolução vertical</label>
                                    <input type="text" name="nome-produto" placeholder="resolucao" className="form-control" />
                                    <small className="help-block form-text text-muted">Resolução horizontal e vertical do monitor em pixels (1920x1080p, etc)</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Taxa de Atualização</label>
                                    <input type="text" name="nome-produto" placeholder="taxaatualizacao" className="form-control" />
                                    <small className="help-block form-text text-muted">Taxa de atualização de imagem do monitor em Hertz (Hz)</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Tamanho</label>
                                    <input type="text" name="nome-produto" placeholder="tamanho" className="form-control" />
                                    <small className="help-block form-text text-muted">Tamanho em polegadas (")</small>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                            <i className="zmdi zmdi-plus"></i>Adicionar</button>
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default DashboardInsercaoMonitor