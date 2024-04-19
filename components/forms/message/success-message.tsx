import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Message from './message';

interface SuccessMessageProps {
  closePopup?: () => void;
}

function SuccessMessage(props: SuccessMessageProps) {
  return (
    <Message
      type="success"
      icon={faCircleCheck}
      title="Заявка отправлена!"
      text="Мы скоро свяжемся с Вами!"
      {...props}
    />
  );
}

export default SuccessMessage;
