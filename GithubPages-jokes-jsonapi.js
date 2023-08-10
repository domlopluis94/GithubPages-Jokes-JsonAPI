class GithubPagesJokesJsonapi {
  constructor() {
    this.data = null;
  }

  async init() {
    this.data = await this.getData();
  }

  async getData() {
    const request = await fetch(
      "https://www.luigic.es/GithubPages-Jokes-JsonAPI/JsonAPI/dataES.json"
    );
    return request.json();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getRandomObjKey(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  getJoke() {
    const joke =
      this.data["chistes"][this.getRandomInt(this.data["chistes"].length)];
    return joke;
  }

  getJokeAsText() {
    return this.getJoke().sentence;
  }

  getRandomText() {
    let index = this.getRandomObjKey(this.data);
    const joke = index[this.getRandomInt(index.length)];
    return joke.sentence;
  }

  getRandom() {
    let index = this.getRandomObjKey(this.data);
    const joke = index[this.getRandomInt(index.length)];
    return joke;
  }

  getRandomFamilyFriendlyText() {
    let joke = null;
    while (joke == null || (joke != null && joke.tags.length != 0)) {
      joke = this.getRandom();
    }
    return joke.sentence;
  }
}
