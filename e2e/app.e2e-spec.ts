import { QuestionsAskerPage } from './app.po';

describe('questions-asker App', function() {
  let page: QuestionsAskerPage;

  beforeEach(() => {
    page = new QuestionsAskerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
