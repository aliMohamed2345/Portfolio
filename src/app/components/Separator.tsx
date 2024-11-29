interface SeparatorProps {
    title: string,
    id: string
}
const Separator = ({ title, id }: SeparatorProps) => {
    return (<div className="separator-section rounded-3" id={`${id}`}>
        <div className="separator mb-2"></div>
        <h2 className="text-center">{title}</h2>
        <div className="separator mt-2"></div>
    </div>)
}
export default Separator