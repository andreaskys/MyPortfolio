import Image from "next/image"
import {SectionTitle} from "../sectionTittle/section-title"
import "./experience.scss"

export function Experience() {
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>2 years studying as a System analist, looking for my first dev job.</p>
            <div className="experience-time">
                <div className="experience-language">
                <Image
                    src="/js2.png"
                    alt="js logo"
                    width={40}
                    height={40}
                    priority
                />
                    <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>
                    </div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                    src="/java2.png"
                    alt="js logo"
                    width={40}
                    height={40}
                    priority
                />
                    <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>
                    </div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                    src="/btstrp.png"
                    alt="js logo"
                    width={40}
                    height={40}
                    priority
                />
                    <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>
                    </div>
                </div>
                </div>
            </div>
          </div>
    )
}