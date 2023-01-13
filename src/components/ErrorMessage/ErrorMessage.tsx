import styles from './errorMessage.module.scss';

interface IErrorMessageProps {
    message: string
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return (
    <div className={styles.errorMessage}>
        {message}
    </div>
  )
}

export default ErrorMessage