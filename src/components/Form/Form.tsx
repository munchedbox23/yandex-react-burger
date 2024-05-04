import styles from "./Form.module.css";
import { FC, FormEvent, PropsWithChildren } from "react";

type TFormProps = {
  title: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  linkComponent: React.ElementType;
};

export const Form: FC<PropsWithChildren<TFormProps>> = ({
  children,
  title,
  onSubmit,
  linkComponent: Links,
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
        {Links && <Links />}
      </div>
    </section>
  );
};
