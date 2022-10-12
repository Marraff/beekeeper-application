import React from 'react'
import {useNavigate} from "react-router-dom"
import styles from "../Register.css"
import Navbar from "../components/Navbar"

function Register(props){
    
    const{ registracia1, heslo, text1, registracia2, spanText1, spanText2, email1Props, email2Props } = props; 

    return(
        <div className='container-center-horizontal'>
            <div className='registrcia screen'>
                <div className='flex-row'>
                    <img className='icon' src='icon.svg' alt='icon'></img>
                    <h1 className='registrcia'>
                        {registracia1}
                    </h1>
                </div>
                <Email place={email1Props.place}
                       menoPriezvisko= {email1Props.menoPriezvisko} />
                <Email place={email2Props.place}
                       menoPriezvisko={email2Props.menoPriezvisko}
                       className={email2Props.classname} />
                <div className='heslo'>
                    <div className='heslo-1 montserrat-medium-eerie-black-14px'>
                        {heslo}
                    </div>  
                    <div className='overlap-group'>
                        <div className='text-1 montserrat-medium-altio-14px'>
                            {text1}              
                        </div>
                        <img className='icon-1' src='icon-1.svg' alt='icon' />
                    </div>
                </div>
                <div className='registracia-1' >
                    <div className='overlap-group-1'>
                        <div className='registrcia-2'>
                            {registracia2}
                        </div>
                    </div>
                </div>
                <p className='u-mte-konto-prihlaste-sa montserrat-medium-eerie-black-14px'>
                    <span className='montserrat-medium-eerie-black-14px'>
                        {spanText1}
                    </span>
                    <span className='span1'>
                        {spanText2}
                    </span>
                </p>
            </div>
        </div>  
    );      
}

function Email(props){
    const{ place, menoPriezvisko, className} = props;

    return(
        <div className={`email ${className || ""}`}>
            <div className='place montserrat-medium-eerie-black-14px'>
                {place}
            </div>
            <div className='overlap-group-2'>
                <div className='meno/priezvisko montserrat-medium-altio-14px'>
                    {menoPriezvisko}
                </div>
            </div>
        </div>
    );
}

const email1data = {
    place: "meno",
    menoPriezvisko: "Meno Priezvisko",
};

const email2data = {
    place: "E-mail",
    menoPriezvisko: "jozkomrkvicka@gmail.com",
    className: "email-1",
};

const registrciaData = {
    registracia1: "Registrácia",
    heslo: "Heslo",
    text1: "*************",
    registracia2: "Registrácia",
    spanText1: "Už máte konto? ",
    spanText2: "Prihláste sa",
    email1Props: email1data,
    email2Props: email2data,

}


export default Register;
