import styles from '../Menu/style/Menu.module.css'

export function Menu() {

  const menuItems = ["About Me", "My Projects","Contacts","GitHub"];
 
  return (
    <div className={styles.MenuStyle}>
    {menuItems.map(item => <div>{item}</div>)}
    </div>
  );
}