import style from "../../../styles/Resume.module.scss"

export const Employment = ({ data }) =>

    <div className={style.employment}>
        <div>
            <h3>{data.title}</h3>
            <div>
                <h4>{data.start_month} {data.start_year} - {data.end_year ?? "Present"} {data.end_month}</h4>
            </div>
        </div>

        <ul>
            {data.description.map(line => <li>{line}</li>)}
        </ul>
    </div>

export const EmploymentSection = ({ data }) => {

    return (
        <div>

        </div>
    )
}