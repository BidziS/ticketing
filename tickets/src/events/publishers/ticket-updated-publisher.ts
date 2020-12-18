import { Publisher, Subjects, TicketUpdatedEvent } from '@dcudnik/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
