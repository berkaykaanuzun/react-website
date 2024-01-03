import styles from '../sections/Features/_features.module.scss'

function Card(props) {

  return (
    <>
      <div className="col-lg-6 col-xxl-4 p-3">
        <div className={styles.card}>
          <div className="card-body">
           <div className={styles.icon +" icon text-center"}>{props.icon}</div>
            <h5 className="card-title fs-4 text-center my-3">{props.title}</h5>
            <p className="card-text text-center">
            {props.text}
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
