import Intrface from "./interface";
import Navbar from "./Navbar";
import { FaUserTie, FaUserGraduate } from "react-icons/fa"
import { GiTeacher } from "react-icons/gi"
import "../Styeles/main.css"
import "../Styeles/Register.css"
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <Navbar />
            <div class="row">
                <div class="column">
                    <div class="card"><FaUserTie />Admin
                        <h3>Espace administrateur</h3><Link to="/Interface"><button className="ensg">
                            Click ici!
                        </button>
                       </Link>
                    </div>
                </div>
                <div class="column">

                    <div class="card"><GiTeacher />Enseignant<h3>Espace enseignants</h3><Link to="/Interface"><button className="ensg">
                    Click ici!.
                        </button></Link> </div></div>
                <div class="column">
                    <div class="card"><FaUserGraduate /> Etudiants<h3>Espace étudiants</h3><Link to="/Interface"><button className="ensg">
                    Click ici!
                        </button>
                       
                       </Link></div>
                </div>
     
            </div>
        </div>

    )
}
export default Register