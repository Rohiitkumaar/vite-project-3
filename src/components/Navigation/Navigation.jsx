import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
    <div className="logo">
    <img src="/logo.png" alt="contact logo"/>
    </div>
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
      
    </nav>
  )
}

export default Navigation
