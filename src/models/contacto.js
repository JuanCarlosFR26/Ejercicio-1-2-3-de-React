export class Contacto {

    nombre = '';
    apellido = '';
    email = '';
    conectado = false;


    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}

const changeStatus = () => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(this.conectado === true) {
            this.setState({
                text: this.state.mimin
            })
        }
    })
}