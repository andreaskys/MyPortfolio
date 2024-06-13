import { GithubIcon } from "../icons/github";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin";
import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/andreasnmm/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/andreas-nunes-machado-056635206/">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/andreaskys">
                <GithubIcon/>
            </a>
        </div>
    )
}