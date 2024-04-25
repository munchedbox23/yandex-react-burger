import styles from "./Form.module.css";
import PropTypes from "prop-types";

export const Form = ({ children, title, onSubmit, linkComponent: Links }) => {
  return (
    <section>
      <div className={`${styles.signWrapper}`}>
        <form onSubmit={onSubmit} className={styles.signForm}>
          <h1 className={`${styles.heading} text text_type_main-medium`}>
            {title}
          </h1>
          {children}
        </form>
        {Links && <Links />}
      </div>
    </section>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  linkComponent: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};
