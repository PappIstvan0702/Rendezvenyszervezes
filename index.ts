interface Participant {
    name: string;
    email: string;
    ticketType: string;
  }
  
  class Event {
    name: string;
    location: string;
    date: Date;
    participants: Participant[];
    category: string;
  
    constructor(name: string, location: string, date: Date, category: string) {
      this.name = name;
      this.location = location;
      this.date = date;
      this.participants = [];
      this.category = category;
    }
  
    addParticipant(participant: Participant) {
      this.participants.push(participant);
    }
  
    removeParticipant(email: string) {
      this.participants = this.participants.filter(p => p.email !== email);
    }
  
    listParticipants() {
      return this.participants;
    }
  }

  class EventManager {
    events: Event[];
  
    constructor() {
      this.events = [];
    }
  
    addEvent(event: Event) {
      this.events.push(event);
    }
  
    removeEvent(eventName: string) {
      this.events = this.events.filter(e => e.name !== eventName);
    }
  
    findEventByCategory(category: string): Event[] {
      return this.events.filter(e => e.category === category);
    }
  
    listAllEvents(): Event[] {
      return this.events;
    }
  }

  const event1 = new Event("Jazz Fest", "Budapest", new Date("2025-06-15"), "Music");
const event2 = new Event("Tech Conference", "Online", new Date("2025-05-10"), "Technology");

const participant1: Participant = { name: "John Doe", email: "john@example.com", ticketType: "VIP" };
const participant2: Participant = { name: "Jane Smith", email: "jane@example.com", ticketType: "Standard" };

event1.addParticipant(participant1);
event2.addParticipant(participant2);

const manager = new EventManager();
manager.addEvent(event1);
manager.addEvent(event2);

console.log(manager.findEventByCategory("Music"));
console.log(manager.listAllEvents());
