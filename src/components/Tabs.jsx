export default function Tabs({children , buttons , ButtonsTag = "menu"}){
    return(
        <>
        <ButtonsTag>
        {buttons}
        </ButtonsTag>
        {children}
        </>
    )
}