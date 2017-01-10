export class RedditArticle  {

  constructor(private title: string, private link: string, private votes?: number) {
    this.votes = this.votes || 0;
    console.log(`Constructor Article ${title} ${link} ${votes} `);
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

}
