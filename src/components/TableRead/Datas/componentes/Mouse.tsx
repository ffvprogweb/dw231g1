import { useState } from "react";
import { Componente } from "../../../TableRead"


interface MouseProps extends Componente {
    nome: string,
    fabricante: string,
    tamanho: string,
    tipo: string,
    semfio: boolean,
}

export function Mouse(props: MouseProps) {
    const [editable, setEditable] = useState(false);

    function handleEdit() {
        if (editable)
            setEditable(false);
        else
            setEditable(true);
    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap">{props.nome}</td>
            <td>{props.fabricante}</td>
            <td className="desc">{props.modelo}</td>
            <td>R${props.preco}</td>
            <td>{props.vendedor}</td>
            <td>{props.tamanho}</td>
            <td>{props.tipo}</td>
            {props.semfio ?
                <td className="text-success">Sim</td>
                :
                <td className="text-danger">Não</td>
            }
            <td><a href={props.linkProduto}>{props.linkProduto}</a></td>
            <td>
                {editable ?
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Confirmar" onClick={handleEdit}>
                            <i className="fa-solid fa-xmark text-danger"></i>
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Cancelar" onClick={handleEdit}>
                            <i className="fa-solid fa-check text-success"></i>
                        </button>
                    </div>
                    :
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleEdit}>
                            <i className='zmdi zmdi-edit'></i>
                        </button>

                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleEdit}>
                            <i className="zmdi zmdi-delete"></i>
                        </button>
                    </div>
                }
            </td>
        </tr>
    )
}