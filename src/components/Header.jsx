import Profile from "../assets/Untitled.png"
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";

export default function Header() {
    return (
        <>
            <img src={Profile} alt="Profile-Image" className="profile"></img>
            <div className="profile-Name">
                <h1>Suyog Muley</h1>
                <div className="developer">Frontend Developer</div>
                <span>suyogmuley.website</span>
            </div>
            <div className="btn">
                <button className="email"> <MdEmail /> Email</button>
                <button className="Linkedin"><span><LiaLinkedin /></span>Linkedin</button>
            </div>
        </>
    )
}