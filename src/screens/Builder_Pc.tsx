import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//Importa titulo
import useDocumentTitle from "../script/useDocumentTitle";
import TableBuilder from "../components/TableBuilder";

function Home() {
  //Importar titulo
  useDocumentTitle("Montando a Build");

  return (
    <div>
      <Header />
      <main id="conteudo">
        <div className="headline text text-white">
          <h2 className="text-center py-3">Monte sua Build</h2>
        </div>

        <div className="menu-line col-9 container-fluid my-3 rounded text-white">
          <div className="row">
            <div className="col-6 text-decoration-underline first-column-build py-3">
              <i className="fa-solid fa-link mx-1"></i>
              https://pcmaker.com.br/lista/dpGwc
            </div>
            <div className="col-sm-2 py-3">
              <button className="btn-menu-line">
                <i className="fa fa-pencil mx-1" aria-hidden="true"></i>Histórico
              </button>
            </div>
            <div className="col-sm-2 py-3">
              <button className="btn-menu-line">
                <i className="fa-solid fa-floppy-disk mx-1"></i>Salvar
              </button>
            </div>
            <div className="col-sm-2 py-3">
              <button className="btn-menu-line">
                <i className="fa-sharp fa-solid fa-plus mx-1"></i>Novo
              </button>
            </div>
          </div>

        </div>

        <div className="container col-md-10 mt-2 col">
          <table className="table table-borderless text-light ">
            <thead>
              <tr className="mt-2">

                <th className="col-md-8">Componente</th>
                <th className="col-md-2">Preço</th>
                <th className="col-md-1">Origem</th>
              </tr>
            </thead>
            <tbody>
              <TableBuilder
                img="https://via.placeholder.com/300x300/"
                nome="Astroloptecus"
                preco="R$ 345,00"
              />
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i> Escolher Placa Mãe</button>
                </td>
              </tr>
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Memória RAM</button>
                </td>
              </tr>
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Armazenamento</button>
                </td>
              </tr>
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Placa de Vídeo</button>
                </td>
              </tr>
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Gabinete</button>
                </td>
              </tr>
              <tr className="mt-1">
                <td>
                  <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Fonte de Alimentação</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container-fluid text-light text-right TextAfterTable" >
          <div className="row">
            <div className="col">
              <h3>Voltagem Estimada: <small className="text-secondary">315W</small></h3>
              <h3>Total: <small className="text-secondary">R$ 4137,21</small></h3>
            </div>
          </div>
        </div>

        <div className="container col-md-10 my-5">

          <div className="notes-builder text-light">
            <div className="row mb-3">
              <div className="col-md-4">
                <h3>
                  Nota de Compatiblidade:
                </h3>
              </div>
              <div className="state-note rounded col-md-1">
                <p className="fw-bold">Compatível</p>
              </div>
            </div>
          </div>


          <div className="row">
            <div>
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-4">Observação I:</div>
                  <p className="text-light col my-2">Um adpatador</p>
                </div>
              </div>
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-4">Observação II:</div>
                  <p className="text-light col my-2">a</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </main >
      <Footer />
    </div >
  );
}

export default Home;