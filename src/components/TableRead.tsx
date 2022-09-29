import { arrumaId } from "../utils/arrumaId"
import { TableElements, TableElementsProps } from "./TableRead/TableElements"
import { TableReadHead } from "./TableRead/TableReadHead"
export interface Componente {
    id: string,
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    vendedor: string,
    linkProduto: string
}

interface TableReadProps extends TableElementsProps {
    body: React.ReactNode[],
    cols: string[]
}

export function TableRead(props: TableReadProps) {
    return (
        <div className="col-md-12 highlight-dashboard" id={arrumaId(props.id)}>
            <h3 className="title-5 m-b-35 text-light table-h3">{props.id}</h3>
            <TableElements
                insereDados={props.insereDados}
                tipoCRUD={props.tipoCRUD}
                id={props.id}
            />
            <div className="table-responsive">
                <table className="table table-data2">
                    <TableReadHead
                        cols={props.cols}
                    />
                    <tbody>
                        {props.body}
                    </tbody>
                </table>
            </div>
        </div>
    )
}