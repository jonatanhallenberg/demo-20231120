import styling from './TextboxCSSMod.module.css';

export const TextboxCSSMod = () => {
    console.log(styling);   
    return (<input type="text" className={`${styling.inputStyle} ${styling.inputStyleAlt}`} />)
}