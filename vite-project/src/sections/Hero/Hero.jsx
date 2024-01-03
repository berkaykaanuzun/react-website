import styles from './_hero.module.scss'


function Hero() {

  return (
    <>
      <header className="py-5">
        <div className="container px-lg-5 py-5">
          <div className="p-4 p-lg-5 bg-light">
            <h1 className="fw-bold text-center py-2">professional design!</h1>
            <p className="text-center">
              Corporate identity design is the name given to all the work done
              to represent your company in every environment and to ensure that
              your customers recognize your company or brand in a memorable way.
            </p>
            <div className="text-center">
            <button type="button" className={styles.btnColor + " btn"}>Get Information</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
