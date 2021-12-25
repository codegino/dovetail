import type {FormEvent, FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Button from '../../components/basic/Button';
import Input from '../../components/basic/Input';
import Select from '../../components/basic/Select';
import {mq} from '../../utils/media-query';

const SubscribeForm: FunctionComponent<{
  onSubmit: (data: {
    eventType: string;
    fullName: string;
    email: string;
  }) => void;
}> = ({onSubmit}) => {
  const handleSubmit = (e: FormEvent<SubscribeFormElement>) => {
    e.preventDefault();
    const {email, fullName, eventType} = e.currentTarget.elements;

    onSubmit({
      eventType: eventType.value,
      email: email.value,
      fullName: fullName.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="eventType">Type of event</label>
        <Select
          id="eventType"
          name="eventType"
          placeholder="Select one"
          defaultValue=""
          required
        >
          <option value="" disabled className="placeholder">
            Select one
          </option>
          {eventTypes.map(eventType => (
            <option value={eventType.value} key={eventType.value}>
              {eventType.label}
            </option>
          ))}
        </Select>
      </div>
      <div className="form-control">
        <label htmlFor="fullName">Your full name</label>
        <Input id="fullName" name="fullName" placeholder="Jane Doe" required />
      </div>
      <div className="form-control">
        <label htmlFor="email">Your email address</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
        />
      </div>

      <Button type="submit">Let me know!</Button>
    </Form>
  );
};

interface FormElements extends HTMLFormControlsCollection {
  eventType: HTMLSelectElement;
  fullName: HTMLInputElement;
  email: HTMLInputElement;
}
interface SubscribeFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const eventTypes = [
  {
    value: 'success',
    label: 'Success',
  },
  {
    value: 'failed',
    label: 'Failed',
  },
];

const Form = styled.form(
  mq({
    padding: '0px 16px',
    minWidth: [350, 400, 450, 544],
    '& label': {
      fontWeight: 500,
      fontFamily: 'Poppins',
      fontSize: 18,
      lineHeight: '24px',
      display: 'block',
      marginBottom: 12,
    },
    '& .form-control': {
      marginBottom: 40,
    },
    "button[type='submit']": {
      marginTop: 76,
    },
  }),
);

export default SubscribeForm;
