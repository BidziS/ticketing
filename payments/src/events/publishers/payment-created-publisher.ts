import { Publisher, PaymentCreatedEvent, Subjects } from '@dcudnik/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
