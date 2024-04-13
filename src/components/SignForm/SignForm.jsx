import styles from "./SignForm.module.css";
import PropTypes from "prop-types";

export const SignForm = ({
  children,
  title,
  onSubmit,
  linkComponent: LoginLinks,
}) => {
  return (
    <section>
      <div className={`${styles.signWrapper}`}>
        <form onSubmit={onSubmit} className={styles.signForm}>
          <h1 className={`${styles.heading} text text_type_main-medium`}>
            {title}
          </h1>
          {children}
        </form>
        <LoginLinks />
      </div>
    </section>
  );
};

SignForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  linkComponent: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};
