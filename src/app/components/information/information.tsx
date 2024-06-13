import { SectionTitle } from "../sectionTittle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
              <span>EN - Fluent</span>
              <span>PT-BR - Native speaker</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
              <span>Studying Systems Analysis and Development - Estácio de Sá University</span>
            </div>
          </div>
    )
}