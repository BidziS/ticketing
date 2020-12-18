import { Publisher, Subjects, TicketCreatedEvent } from '@dcudnik/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
