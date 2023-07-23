class GithubPagesJokesJsonapi {
  constructor() {
    this.data = null;
  }

  async init() {
    this.data = await this.getData();
  }

  async getData() {
    const request = await fetch(
      "https://domlopluis94.github.io/GithubPages-Jokes-JsonAPI/JsonAPI/dataES.json"
    );
    return request.json();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getJoke() {
    const joke =
      this.data["chistes"][this.getRandomInt(this.data["chistes"].length)];
    return joke;
  }

  getJokeAsText() {
    return this.getJoke().sentence;
  }
}
