export class Conversation
{
    constructor(
        public id: number,
        public owner: number,
        public name: string,
        public lastSender: string,
        public lastMessage: string,
        public avatarUrl: string) { }
}