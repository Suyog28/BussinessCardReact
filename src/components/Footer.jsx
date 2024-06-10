import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <FaTwitterSquare className="icon" />
            <FaSquareFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaGithub />
        </div>
    )
}