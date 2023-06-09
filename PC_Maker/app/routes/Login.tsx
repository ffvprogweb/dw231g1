import { createUserSession, loginSession } from '~/utils/session.server';
import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import login from '../styles/login.css'
import type { ActionArgs, LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, useActionData } from '@remix-run/react';
import { useState } from 'react';
import { badRequest } from 'remix-utils';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: login },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Login"
});

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const password = form.get("senha")?.toString();
  const email = form.get("email")?.toString();

  const fields = { email, password };

  const user = await loginSession({ email, password });
  console.log({ user });
  if (!user)
    return badRequest({
      fields,
      formError: `A combinação Email/Senha está incorreta`,
    });

  console.log(user.id)

  return createUserSession(user.id, "/");
}



function Login() {
  const actionData = useActionData<typeof action>();
  const [hide, setHide] = useState(true)

  return (
    <div className='login-page'>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card-login bg-dark text-light">{/* <!-- Aqui arrendoda --> */}
                <div className="row g-0">
                  <div className="col-md-8 col-lg-7 d-none d-md-block">
                    <img className="img-login" src="/Rectangle 6.png"
                      alt="Foto de um PC" />
                  </div>
                  <div className="col-md-4 col-lg-5 d-flex align-items-center">
                    <div className="card-body p-1 p-lg-4 text-black">

                      <form method="post">

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0s">Login</span>
                        </div>

                        <div className="col-9">
                          <Input
                            inputProperties={{
                              type: "email",
                              name: "email",
                              required: true,
                              defaultValue: actionData?.fields?.email,
                              id: "email",
                            }}
                          />
                        </div>

                        <Input
                          inputProperties={{
                            type: `${hide ? "password" : "text"}`,
                            name: "senha",
                            defaultValue: actionData?.fields?.password,
                            required: true,
                            id: "senha"
                          }}
                          setHide={setHide}
                          hide={hide}
                        />
                        {/* botar um esqueci a senha depois aqui */}

                        {actionData?.formError &&
                          <p className='text-danger'>{actionData?.formError}</p>
                        }



                        <div className="container-fluid pt-5">
                          <div className="row">
                            <div className="col">
                              <input className="form-check-input bg-dark border-white" type="checkbox" value="" id="defaultCheck1" />
                              <label className="form-check-label px-2 minorText" htmlFor="defaultCheck1">Lembrar Senha</label>
                            </div>
                            <div className="col col-lg-3">
                              <SubmitForm
                                name='login'
                                id='login'
                                text='Login'
                              />
                            </div>

                          </div>
                        </div>
                        <div className="container-fluid">
                          <div className="row">
                            <span className="h4 mb-0 minorText">Ou fazer login com:</span>
                            <div className=" col-xl-6 pt-2">
                              <ul className="social-icons">
                                <li><a className="google" href="#"><i className="fa fa-google"></i></a></li>
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="apple" href="#"><i className="fa fa-apple"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="container-fluid DontHAveAccount pt-lg-5 minorText">
                          <p> Não tem uma conta? <Link to="/cadastro" className="cadastrese"> Cadastre aqui.</Link> </p>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  )
}

export default Login
