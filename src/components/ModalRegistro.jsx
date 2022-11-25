import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ctrlUser } from '../auxs/ControladoresUsuarios';


function ModalRegistro() {

    const ctrlForm = {
        campoUser : ()=>{
            console.log("user")
            setHiddenMedic(true);
            setHiddenAdmin(true);
            setNewUser({...newUser,"role":"user"})
            setMatricula("");
            setCodAdmin(""); 
            document.getElementById('MatriLabel').value = ""; 
            document.getElementById('CodLabel').value = ""
        },
    
        campoMedic : () => {
            setHiddenMedic(false);
            setHiddenAdmin(true)
            console.log("medic")
            setNewUser({...newUser,"role":"medic"})
            setCodAdmin(""); 
            document.getElementById('CodLabel').value = ""
        },
    
        campoAdmin : () => {
            setHiddenAdmin(false);
            setHiddenMedic(true)
            setNewUser({...newUser,"role":"user"}) 
            setMatricula(""); 
            document.getElementById('MatriLabel').value = ""
            console.log("admin")
        }
    } 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

<<<<<<< HEAD
    const [hiddenMedic, setHiddenMedic] = useState(true);
    const [hiddenAdmin, setHiddenAdmin] = useState(true);
=======
  const [hiddenMedic, setHiddenMedic] = useState(true);
  const [hiddenAdmin, setHiddenAdmin] = useState(true);



  const [dni,setDNI]= useState("")
  const [nombreyape,setNombreyape]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [role,setRole]= useState("")
  const [matricula,setMatricula]= useState("")
  const [codAdmin,setCodAdmin]= useState("")
  
  



  const postuser=async()=>{

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw=JSON.stringify({
            "dni":dni,
            "nombreyape":nombreyape,
            "email":email,
            "password":password,
            "role":role
        })
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body:raw,
          redirect: 'follow'
        };
        
        await fetch("http://localhost:3000/user", requestOptions)
            .then(response => response.json())
            .then(objetos =>{
                console.log(objetos)
            }
        )
          .catch(error => console.log('error', error));
    }
  
  
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d

    const [newUser,setNewUser]= useState({
        dni:"",
        nombreyape:"",
        email:"",
        password:"",
        role:"",
        enrollment:"",
        codeAdmin:""
    })

    const postuser=async()=>{
            
            var rawUser=JSON.stringify(newUser)

            console.log(rawUser)
            ctrlUser.postUser("http://localhost:3000/user", rawUser)
        }
    
    
    
return (
    <>
    <a type='button' onClick={handleShow}>
        Registro
    </a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Formulario de Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="">
                <div className="row">
                    <label htmlFor="formGroupExampleInput" className="form-label"><strong>Ingrese su DNI/Documento</strong></label>
                    <div className=" form-group input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z"></path></svg></span>
<<<<<<< HEAD
                        <input type="number" className="form-control" id="DNI" required onChange={(e)=>setNewUser({...newUser,"dni":e.target.value})}/>
=======
                        <input type="number" className="form-control" id="DNI" required onChange={(e)=>setDNI(e.target.value)}/>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
                    </div>
                    <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Ingrese su Apellido y Nombre</strong></label>
                    <div className=" form-group mt-2 input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg></span>
<<<<<<< HEAD
                        <input type="text" className="form-control" id="AYP" required onChange={(e)=>setNewUser({...newUser,"nombreyape":e.target.value})}/>
=======
                        <input type="text" className="form-control" id="AYP" required onChange={(e)=>setNombreyape(e.target.value)}/>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
                    </div>
                    <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Ingrese su Correo Electrónico</strong></label>
                    <div className=" form-group mt-2 input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg></span>
<<<<<<< HEAD
                        <input type="email" className="form-control" id="E-mail" required onChange={(e)=>setNewUser({...newUser,"email":e.target.value})}/>
=======
                        <input type="email" className="form-control" id="E-mail" required onChange={(e)=>setEmail(e.target.value)}/>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
                    </div>
                    <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Ingrese una contraseña</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path></svg></span>
<<<<<<< HEAD
                        <input type="password" className="form-control" id="Contraseña"  required onChange={(e)=>setNewUser({...newUser,"password":e.target.value})}/>
=======
                        <input type="password" className="form-control" id="Contraseña"  required onChange={(e)=>setPassword(e.target.value)}/>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
                    </div>
                    <label htmlFor="formGroupExampleInput" className="form-label mt-2"><strong>Repita la contraseña</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path></svg></span>
<<<<<<< HEAD
                        <input className="form-control" type="password" id="Contraseña2"  required onChange={(e)=>(e.target.value===newUser.password)?console.log("holas"):console.log("no")}/>
                    </div>
                    <div className="form-group mt-2">

{/* Categoria del nuevo usuario */}

                        <label htmlFor="" name="queso">¿En que categoria desea registrarse?</label>
                        <br />
                        <input type="radio" value="Paciente" name='Categoria' onClick={(e)=>{ctrlForm.campoUser()}}/>Paciente
                        <br />
                        <input type="radio" value="Medico" name='Categoria' onClick={()=>{ctrlForm.campoMedic()}} />Medico
                        <br />
                        <input type="radio" value="Administrador" name='Categoria' onClick={()=>{ctrlForm.campoAdmin()}}/>Administrador
=======
                        <input className="form-control" type="password" id="Contraseña2"  required/>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="" name="queso">¿En que categoria desea registrarse?</label>
                        <br />
                        <input type="radio" value="Paciente" name='Categoria' onClick={()=>{setHiddenMedic(true);setHiddenAdmin(true);setRole("user")}}/>Paciente
                        <br />
                        <input type="radio" value="Medico" name='Categoria' onClick={()=>{setHiddenMedic(false);if(hiddenAdmin==false){setHiddenAdmin(true)};setRole("medic")}} />Medico
                        <br />
                        <input type="radio" value="Administrador" name='Categoria' onClick={()=>{setHiddenAdmin(false);if(hiddenMedic==false){setHiddenMedic(true)};setRole("admin")}}/>Administrador
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
                    </div>

                    <label htmlFor="Enrollment" className="form-label mt-2" hidden={hiddenMedic} id="MatriLabel"><strong>Ingrese su Matricula</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap" hidden={hiddenMedic}>
                        <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M6.75 0A1.75 1.75 0 005 1.75V3H1.75A1.75 1.75 0 000 4.75v8.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H11V1.75A1.75 1.75 0 009.25 0h-2.5zM9.5 3V1.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V3h3zM5 4.5H1.75a.25.25 0 00-.25.25V6a2 2 0 002 2h9a2 2 0 002-2V4.75a.25.25 0 00-.25-.25H5zm-1.5 5a3.484 3.484 0 01-2-.627v4.377c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V8.873a3.484 3.484 0 01-2 .627h-9z"></path></svg></span>
<<<<<<< HEAD
                        <input type="text" className="form-control" placeholder="Matricula de ejemplo" onChange={(e)=>setNewUser({...newUser,"enrollment":e.target.value})}/>
                    </div>

                    <label htmlFor="adminCode" className="form-label mt-2" hidden={hiddenAdmin} id="CodLabel"><strong>Ingrese su Codigo de administrador</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap" hidden={hiddenAdmin}>
                    <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg></span>
                        <input type="text" className="form-control" placeholder="Codigo de ejemplo" onChange={(e)=>setNewUser({...newUser,"codeAdmin":e.target.value})}/>
                    </div>
                    
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button className='d-none d-md-inline appointment-btn scrollto btn btn-primary regButton' onClick={handleClose}>
                Cerrar
            </Button>
        
            <Button className='d-none d-md-inline appointment-btn scrollto btn btn-primary' onClick={postuser}>
                Registrarse
            </Button>
        </Modal.Footer>
    </Modal>
=======
                        <input type="text" className="form-control" placeholder="Matricula de ejemplo" onChange={(e)=>setMatricula(e.target.value)}/>
                    </div>

                    <label htmlFor="adminCode" className="form-label mt-2" hidden={hiddenAdmin} id="MatriLabel"><strong>Ingrese su Codigo de administrador</strong></label>
                    <div className="form-group mt-2 input-group flex-nowrap" hidden={hiddenAdmin}>
                    <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg></span>
                        <input type="text" className="form-control" placeholder="Codigo de ejemplo" onChange={(e)=>setCodAdmin(e.target.value)}/>
                    </div>
                    
                </div>
                <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
          
            <Button variant="primary" type='button' onClick={postuser}>
                Registrarse
            </Button>
        </Modal.Footer>
            </form>
        </Modal.Body>
     
      </Modal>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
    </>
);
}

export default ModalRegistro
