import { Publisher, OrderCreatedEvent, Subjects } from '@dcudnik/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
