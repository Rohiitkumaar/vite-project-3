import {MdMessage} from 'react-icons/md';
import styles from "./Button.module.css";
const Button = ({isOutline,text,icons,...rest}) => {
  return (

    
    <div>
      <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icons}
      {text}
      </button>
      
    </div>
  )
}

export default Button
