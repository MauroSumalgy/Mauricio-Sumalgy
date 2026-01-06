
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatHistory {
  messages: Message[];
}
