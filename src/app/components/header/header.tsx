import Image from "next/image";

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i'm Andreas </h1>
            <h2>Software Developer</h2>
          </div>
          <Image
            src="/lauda.png"
            alt="My Picture"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}