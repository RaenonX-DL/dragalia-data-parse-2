export type StoryConversationType = 'conversation' | 'break';

export type StoryBase<T extends StoryConversationType> = {
  type: T
};

export type StoryTalk = StoryBase<'conversation'> & {
  audioPaths: Array<string>,
  content: string,
  isSys: boolean,
  speakerIcon: string | null,
  speakerName: string
};

export type StoryBreak = StoryBase<'break'>;

export type StoryConversation = StoryTalk | StoryBreak;

export type Story = {
  id: number,
  title: string,
  conversations: Array<StoryConversation>,
};
